

## 官网

## 技术选型
## nuxt 3.0 + vue3 + typescript + naive UI + element plus 

[nuxt 3.0](https://nuxt.com/)

[naive UI](https://www.naiveui.com/zh-CN/os-theme)

## Setup

安装依赖

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
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


## 自动导入  nuxt 默认自动引入

### components 组件目录自动引入

### composables 组合方法自动引入

```ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}

// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState('foo', () => 'bar')
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

### 可在nuxt.config.ts 中关闭自动引入

```js
export default defineNuxtConfig({
  imports: {
    autoImport: false
  }
})
```
