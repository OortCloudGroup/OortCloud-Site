#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const DEFAULT_REMOTE = 'github'
const DEFAULT_BRANCH = 'main'
const MAX_RETRY_COUNT = 20
const CONCURRENCY = 2
const shouldSkipStage = process.env.GITHUB_API_PUSH_SKIP_STAGE === '1'

const commitMessage = process.argv[2]
const remoteName = process.env.GITHUB_API_PUSH_REMOTE || DEFAULT_REMOTE
const branchName = process.env.GITHUB_API_PUSH_BRANCH || DEFAULT_BRANCH
const rootPath = process.cwd()
const cachePath = path.join(rootPath, '.git', 'github-api-blob-cache.json')

if (!commitMessage) {
  console.error('错误：请提供提交信息，例如：node scripts/github-api-push.mjs "chore: 更新网站快照"')
  process.exit(1)
}

if (!/^(feat|fix|docs|style|refactor|perf|test|chore): .+/.test(commitMessage)) {
  console.error('错误：提交信息必须符合 Conventional Commits，例如：chore: 更新网站快照')
  process.exit(1)
}

let cacheData = {}

if (fs.existsSync(cachePath)) {
  cacheData = JSON.parse(fs.readFileSync(cachePath, 'utf8'))
}

function runGit(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

function runCommand(command, args) {
  return execFileSync(command, args, { encoding: 'utf8' }).trim()
}

function saveCache() {
  fs.writeFileSync(cachePath, JSON.stringify(cacheData), 'utf8')
}

function parseRepository(remoteUrl) {
  const sshMatch = remoteUrl.match(/github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/)

  if (!sshMatch) {
    throw new Error(`无法从远端地址解析 GitHub 仓库：${remoteUrl}`)
  }

  return {
    owner: sshMatch[1],
    repo: sshMatch[2]
  }
}

function parseIndex() {
  const output = execFileSync('git', ['ls-files', '--stage', '-z'])
  const lines = output.toString('utf8').split('\0').filter(Boolean)

  return lines.map((line) => {
    const match = line.match(/^(\d+) ([0-9a-f]{40}) (\d)\t(.+)$/)

    if (!match) {
      throw new Error(`无法解析 Git 索引行：${line}`)
    }

    return {
      mode: match[1],
      localSha: match[2],
      filePath: match[4]
    }
  })
}

async function request(token, method, endpoint, body, attempt = 1) {
  try {
    const response = await fetch(`https://api.github.com${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'github-api-push-script',
        ...(body ? { 'Content-Type': 'application/json' } : {})
      },
      body: body ? JSON.stringify(body) : undefined
    })

    if (response.ok) {
      return response.json()
    }

    const detail = await response.text()

    if ((response.status === 429 || response.status >= 500) && attempt < MAX_RETRY_COUNT) {
      await waitRetry(attempt, `${method} ${endpoint} ${response.status}`)
      return request(token, method, endpoint, body, attempt + 1)
    }

    throw new Error(`${method} ${endpoint} 失败：${response.status} ${detail}`)
  } catch (error) {
    if (attempt < MAX_RETRY_COUNT) {
      await waitRetry(attempt, `${method} ${endpoint} ${error.message}`)
      return request(token, method, endpoint, body, attempt + 1)
    }

    throw error
  }
}

async function waitRetry(attempt, reason) {
  const delay = Math.min(60000, 2000 * attempt * attempt)
  console.log(`网络重试 ${attempt}：${reason}`)
  await new Promise(resolve => setTimeout(resolve, delay))
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length)
  let cursor = 0
  let doneCount = 0

  async function runWorker() {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      results[index] = await worker(items[index])
      doneCount += 1

      if (doneCount % 50 === 0 || doneCount === items.length) {
        console.log(`已处理 blob：${doneCount}/${items.length}`)
        saveCache()
      }
    }
  }

  await Promise.all(Array.from({ length: limit }, runWorker))
  return results
}

async function main() {
  runCommand('gh', ['auth', 'status'])

  const token = runCommand('gh', ['auth', 'token'])
  const remoteUrl = runGit(['remote', 'get-url', remoteName])
  const repository = parseRepository(remoteUrl)

  if (!shouldSkipStage) {
    console.log('同步 Git 索引：git add -A')
    runGit(['add', '-A'])
  }

  const entries = parseIndex()
  const localHead = runGit(['rev-parse', 'HEAD'])

  console.log(`仓库：${repository.owner}/${repository.repo}`)
  console.log(`分支：${branchName}`)
  console.log(`本地 HEAD：${localHead}`)
  console.log(`提交信息：${commitMessage}`)
  console.log(`准备处理文件：${entries.length}`)

  const ref = await request(
    token,
    'GET',
    `/repos/${repository.owner}/${repository.repo}/git/ref/heads/${branchName}`
  )
  const parentSha = ref.object.sha
  console.log(`远端 ${branchName}：${parentSha}`)

  const tree = await mapLimit(entries, CONCURRENCY, async(entry) => {
    const cacheKey = `${entry.localSha}:${entry.filePath}`

    if (cacheData[cacheKey]) {
      return {
        path: entry.filePath,
        mode: entry.mode,
        type: 'blob',
        sha: cacheData[cacheKey]
      }
    }

    const absolutePath = path.join(rootPath, entry.filePath.replaceAll('/', path.sep))
    const blob = await request(token, 'POST', `/repos/${repository.owner}/${repository.repo}/git/blobs`, {
      content: fs.readFileSync(absolutePath).toString('base64'),
      encoding: 'base64'
    })

    cacheData[cacheKey] = blob.sha

    return {
      path: entry.filePath,
      mode: entry.mode,
      type: 'blob',
      sha: blob.sha
    }
  })

  saveCache()
  console.log('创建 tree...')
  const createdTree = await request(token, 'POST', `/repos/${repository.owner}/${repository.repo}/git/trees`, {
    tree
  })

  console.log(`tree：${createdTree.sha}`)
  console.log('创建 commit...')
  const commit = await request(token, 'POST', `/repos/${repository.owner}/${repository.repo}/git/commits`, {
    message: commitMessage,
    tree: createdTree.sha,
    parents: [parentSha]
  })

  console.log(`commit：${commit.sha}`)
  console.log(`更新 ${branchName} 引用...`)
  await request(token, 'PATCH', `/repos/${repository.owner}/${repository.repo}/git/refs/heads/${branchName}`, {
    sha: commit.sha,
    force: false
  })

  const latestRef = await request(
    token,
    'GET',
    `/repos/${repository.owner}/${repository.repo}/git/ref/heads/${branchName}`
  )

  if (latestRef.object.sha !== commit.sha) {
    throw new Error(`远端验证失败：期望 ${commit.sha}，实际 ${latestRef.object.sha}`)
  }

  console.log(`完成：refs/heads/${branchName} -> ${commit.sha}`)
}

main().catch((error) => {
  saveCache()
  console.error(error.stack || error.message)
  process.exit(1)
})
