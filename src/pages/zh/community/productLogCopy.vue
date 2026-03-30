<template>
  <div class="home_page vls">
    <div class="htmlbody">
      <div class="main_body">
        <!-- 左侧目录树 -->
        <div class="sidebar">
          <div class="sidebar-title">
            版本目录
          </div>
          <div class="tree-container">
            <div
              v-for="releaseNode in treeData"
              :key="releaseNode.name"
              class="tree-node"
              :class="{ 'tree-expanded': expandedReleases.has(releaseNode.name) }"
            >
              <div
                class="tree-node-item"
                @click="toggleExpand(releaseNode.name)"
              >
                <span class="tree-expand-icon">▶</span>
                <span class="release-version-node">{{ releaseNode.name }}</span>
              </div>
              <div class="tree-children">
                <div
                  v-for="codeNode in releaseNode.children"
                  :key="codeNode.id"
                  class="tree-node-item"
                  :class="{ active: activeId === codeNode.id }"
                  @click.stop="scrollToItem(codeNode.id)"
                >
                  <span style="width: 16px;" />
                  <span class="code-version-node">{{ codeNode.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧内容区域 -->
        <div ref="mainContentRef" class="main-content">
          <div class="container">
            <div
              v-for="(update, index) in timelineData.updates"
              :id="update.id"
              :key="index + ' - ' + update.codeVersion"
              class="update-item"
            >
              <!-- 左列：日期和版本 -->
              <div class="left-column">
                <!-- 发布版本号（蓝底白字，只在与上一个不同时显示） -->
                <div
                  v-if="update.showReleaseBadge"
                  class="release-badge"
                >
                  <div class="release-text">
                    {{ update.releaseVersion }}
                  </div>
                </div>
                <div class="date-text">
                  {{ update.date }}
                </div>
                <div class="version-badge">
                  <div class="version-dot" />
                  <div class="version-text">
                    {{ update.codeVersion }}
                  </div>
                </div>
              </div>

              <!-- 右列：服务分组 -->
              <div class="right-column">
                <div
                  v-for="(service, sIndex) in update.services"
                  :key="sIndex"
                >
                  <div class="service-title">
                    {{ service.serviceName }}
                  </div>
                  <div class="update-title">
                    {{ service.title }}
                  </div>
                  <div class="content-list">
                    <div
                      v-for="(item, iIndex) in service.content"
                      :key="iIndex"
                      class="content-item"
                    >
                      <div class="content-dot" />
                      <div class="content-text">
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted } from 'vue'
import changelogData from './changelog.json'

definePageMeta({
  layout: 'bottomLayout'
})

// 响应式数据（方便后续从接口获取）
const changelog = ref(changelogData)

// 目录树展开状态
const expandedReleases = reactive(new Set())

// 当前选中项 ID
const activeId = ref('')

// 主内容区域引用
const mainContentRef = ref(null)

// 解析版本号为数值对象
const parseVersion = (ver) => {
  const match = ver.match(/v(\d+)\.(\d+)\.(\d+)/)
  if (match) {
    return {
      major: parseInt(match[1]),
      minor: parseInt(match[2]),
      patch: parseInt(match[3])
    }
  }
  return { major: 0, minor: 0, patch: 0 }
}

// 构建目录树数据
const treeData = computed(() => {
  const tree = {}
  changelog.value.updates.forEach((update) => {
    const releaseVer = update.releaseVersion
    const id = 'update-' + update.codeVersion.replace(/\./g, '-')

    if (!tree[releaseVer]) {
      tree[releaseVer] = {
        name: releaseVer,
        children: []
      }
    }
    tree[releaseVer].children.push({
      name: update.codeVersion + ' (' + update.date + ')',
      id,
      codeVersion: update.codeVersion
    })
  })

  // 转换为数组并按发布版本号倒序排序
  let result = Object.values(tree)
  result.sort((a, b) => {
    const verA = parseVersion(a.name)
    const verB = parseVersion(b.name)

    if (verA.major !== verB.major) return verB.major - verA.major
    if (verA.minor !== verB.minor) return verB.minor - verA.minor
    return verB.patch - verA.patch
  })

  return result
})

// 时间线数据（添加 ID 和 showReleaseBadge 字段）
const timelineData = computed(() => {
  let lastReleaseVersion = ''
  return {
    updates: changelog.value.updates.map((update) => {
      const showReleaseBadge = update.releaseVersion !== lastReleaseVersion
      lastReleaseVersion = update.releaseVersion
      return {
        ...update,
        id: 'update-' + update.codeVersion.replace(/\./g, '-'),
        showReleaseBadge
      }
    })
  }
})

// 展开/收起目录
const toggleExpand = (releaseName) => {
  if (expandedReleases.has(releaseName)) {
    expandedReleases.delete(releaseName)
  } else {
    expandedReleases.add(releaseName)
    // 展开后滚动到该发布版本下的第一个代码版本
    nextTick(() => {
      const releaseNode = treeData.value.find(n => n.name === releaseName)
      if (releaseNode && releaseNode.children.length > 0) {
        scrollToItem(releaseNode.children[0].id)
      }
    })
  }
}

// 滚动到对应位置
const scrollToItem = (id) => {
  activeId.value = id
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 初始化：加载本地数据（后续可替换为 API 调用）
onMounted(async() => {
  // TODO: 后续从接口获取数据

  // 获取链接的type 请求对应的url
  let changelogJSONUrl = 'https://myoumuamua.com/mystatic/changelog/'
  let urlParams = new URLSearchParams(window.location.search)
  let type = urlParams.get('type')
  switch (type) {
    case 'Android':
      changelogJSONUrl += 'changelog_android.json'
      break
    case 'iOS':
      changelogJSONUrl += 'changelog_ios.json'
      break
    case 'HarmonyOS':
      changelogJSONUrl += 'changelog_harmony.json'
      break

    case 'Windows_desktop':
    case 'Mac_desktop':
    case 'Linux_desktop':
      changelogJSONUrl += 'changelog_desktop.json'
      break

    case 'Windows_studio':
    case 'Mac_studio':
    case 'Linux_studio':
      changelogJSONUrl += 'changelog_oortstudio.json'
      break
    case 'Web':
      changelogJSONUrl += 'changelog_web.json'
      break
    case 'Source_code':
      changelogJSONUrl += 'changelog.json'
      break
    default:
      changelogJSONUrl += 'changelog.json'
      break
  }
  const response = await fetch(changelogJSONUrl + '?' + Date.now())
  const data = await response.json()
  changelog.value = data
})

</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.title {
  font-size: 64px;
  font-weight: 700;
  color: #fff;
}

.subTile {
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  margin-top: 8px;
}

.box1 {
  background-color: #2278ff;
  padding: 48px 0 48px 262px;
  display: flex;
  flex-direction: column;
}

.htmlbody {
  background-color: #FAFAFA;
}

/* 自定义滚动条样式 */
.main-content {
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(34, 120, 255, 0.2);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 120, 255, 0.3);
  }
}

/* 主容器 */
.main_body {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

/* 左侧目录树 */
.sidebar {
  width: 280px;
  background-color: #FFFFFF;
  padding: 24px 20px;
  border-right: 1px solid #EEF0F2;
  height: calc(100vh - 200px);
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
}

.sidebar-title {
  font-size: 36px;
  font-weight: 600;
  color: #1A1A2E;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2278ff;
  letter-spacing: 0.3px;
}

/* 目录树节点样式 */
.tree-node {
  cursor: pointer;
  user-select: none;
  margin-bottom: 4px;
}

.tree-node-item {
  padding: 10px 14px;
  margin: 2px 0;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tree-node-item:hover {
  background-color: rgba(34, 120, 255, 0.06);
  transform: translateX(2px);
}

.tree-node-item.active {
  background: linear-gradient(135deg, #2278ff 0%, #1E66E6 100%);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(34, 120, 255, 0.2);
}

.tree-expand-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  transition: transform 0.2s ease;
  color: #2278ff;
}

.tree-expanded > .tree-node-item:first-child .tree-expand-icon {
  transform: rotate(90deg);
}

.tree-children {
  margin-left: 8px;
  display: none;
}

.tree-expanded > .tree-children {
  display: block;
}

.release-version-node {
  font-weight: 500;
  color: #1A1A2E;
  font-size: 26px;
  letter-spacing: 0.2px;
}

.code-version-node {
  font-weight: 400;
  color: #6B7280;
  font-size: 25px;
}

.tree-node-item.active .release-version-node,
.tree-node-item.active .code-version-node,
.tree-node-item.active .tree-expand-icon {
  color: #FFFFFF;
}

/* 右侧内容区域 */
.main-content {
  flex: 1;
  padding: 10px 30px 40px 0;
  box-sizing: border-box;
  overflow: auto;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.update-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-left: 10px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  scroll-margin-top: 80px;
}

.update-item:hover {
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px); */
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 160px;
}

.date-text {
  font-size: 27px;
  font-weight: 500;
  color: #1A1A2E;
  line-height: 1.5;
}

.version-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background-color: #ECFDF5;
  border-radius: 6px;
  width: fit-content;
}

.version-dot {
  width: 6px;
  height: 6px;
  background-color: #059669;
  border-radius: 50%;
}

.version-text {
  font-size: 25px;
  font-weight: 500;
  color: #059669;
}

.release-badge {
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, #2278ff 0%, #1E66E6 100%);
  border-radius: 6px;
  width: fit-content;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(34, 120, 255, 0.2);
}

.release-text {
  font-size: 26px;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 0.3px;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-title {
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 4px;
}

.update-title {
  font-size: 26px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 6px;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.content-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.content-dot {
  width: 6px;
  height: 6px;
  background-color: #9CA3AF;
  border-radius: 50%;
  margin-top: 27px;
  flex-shrink: 0;
}

.content-text {
  font-size: 30px !important;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 220px;
  }

  .main-content {
    padding: 30px 20px;
  }

  .container {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .main-content {
    padding: 20px 16px;
  }

  .update-item {
    flex-direction: column;
    gap: 16px;
    padding: 20px;
  }

  .left-column {
    min-width: auto;
  }
}
</style>
