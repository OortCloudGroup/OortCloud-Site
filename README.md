## 官网

## 技术选型

## nuxt 3.0 + vue3 + typescript + naive UI + element plus

[nuxt 3.0](https://nuxt.com/)

[naive UI](https://www.naiveui.com/zh-CN/os-theme)

## Setup

安装依赖

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 自动导入 nuxt 默认自动引入

### components 组件目录自动引入

### composables 组合方法自动引入

```ts
export const useFoo = () => {
  return useState("foo", () => "bar");
};

// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState("foo", () => "bar");
}
```

```js
<template>
  <div>
    {{ foo }}
  </div>
</template>
<script setup>
const foo = useFoo()
</script>
```

### 可在 nuxt.config.ts 中关闭自动引入

```js
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
});
```

### eslint 和 commitlint

### 注意

ssr false 方可执行 generate 命令 生成静态 html


## 关于 thirdHtml 的说明  

是 AI 生成的 html 文件


### 使用 gitserver 增量更新

- 原理就是 理由git hook 的命令 push完，将文件复制过去

```sh


git pull
git add .
git commit -m "更新XXXXXX"
# 推送到远程 main 分支
git push origin main
打tag （只有tag 才会触发部署）举例 如果pc- 开头的tag 只会更新 pc的文件夹到服务器，所以，一次更新一个，更新 sh 就打 sh- 开头的标签
git tag pc-v1.0.0
推送
git push origin pc-v1.0.0


```