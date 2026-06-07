<template>
  <div class="home_page vls">
    <div class="title box1">
      下载
    </div>
    <!-- 新增：通用版/行业版切换 -->
    <div class="tab-switch">
      <div class="tab-item" :class="{active: activeTab === 'general'}" @click="activeTab = 'general'">
        通用版
      </div>
      <div class="tab-item" :class="{active: activeTab === 'industry'}" @click="activeTab = 'industry'">
        行业版
      </div>
    </div>
    <div class="w1380">
      <div class="container">
        <div v-if="activeTab === 'general'" class="left">
          <div v-for="(item,index) in generalList" :key="index" class="color-table-container">
            <table class="color-table">
              <thead>
                <tr>
                  <th>{{ item.name }}</th>
                  <th>{{ item.Download }}</th>
                  <th>{{ item.Changelog }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in item.list" :key="color.name">
                  <td>{{ color.name }}</td>
                  <td>
                    <div class="download">
                      <img v-if="color.img1" :src="color.img1" alt="" @click="goGitHub(item)" />
                      <img v-if="color.img2" :src="color.img2" alt="" @click="goDisk(color.img2)" />
                    </div>
                  </td>
                  <td>
                    <div class="download_lan" @click="goProduceLog(color.type)">
                      Changelog
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="activeTab === 'industry'" class="left">
          <div v-for="(value,index) in industryList" :key="index" class="color-table-container">
            <table class="color-table">
              <thead>
                <tr>
                  <th>{{ value.name }}</th>
                  <th>{{ value.Download }}</th>
                  <th>{{ value.Changelog }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in value.list" :key="color.name">
                  <td>{{ color.name }}</td>
                  <td>
                    <div class="download">
                      <img :src="color.img1" alt="" />
                    </div>
                  </td>
                  <td>
                    <div class="download_lan" @click="goProduceLog(color.type)">
                      Changelog
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="right">
          <div class="rightBox1">
            <div class="title1" style="color: #fff;">
              试用--无需安装
            </div>
          </div>
          <div class="rightBox2">
            <div class="title2 margin20">
              比较版本
            </div>
            <div class="title1 margin20" style="font-weight: 400;">
              版本设计适合任何规模和需求的企业。
            </div>
            <div class="title1" style="color: cadetblue;">
              比较页面 →
            </div>
          </div>
          <div class="rightBox2">
            <div class="title2 margin20">
              安装指南
            </div>
            <div class="title1 margin20" style="font-weight: 400;">
              Windows、Ubuntu/Debian、RedHat (RPM)、Docker 安装指南。
            </div>
            <div class="title1" style="color: cadetblue;">
              查看更多 →
            </div>
          </div>
          <div class="rightBox2">
            <div class="title2 margin20">
              有疑问？
            </div>
            <div class="title1 margin20" style="font-weight: 400;">
              有关 Oort Cloud 应用程序或服务的任何事项，请与我们联系。
            </div>
            <div class="title1" style="color: cadetblue;">
              联系我们 →
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { download } from 'naive-ui/es/_utils'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

const goProduceLog = (type) => {
  window.open(`/zh/community/productLog?type=${type}`, '_blank')
}

const generalList = ref([
  {
    name: 'OortCloud APP',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'HarmonyOS',
      type: 'HarmonyOS',
      img1: '/img/demo/download/HarmonyOS.png'
    },
    {
      name: 'SDK',
      type: 'SDK',
      img1: '/img/demo/download/Google.png'
    }]
  },
  {
    name: 'OortCloud Desktop',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Windows',
      type: 'Windows_desktop',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    },
    {
      name: 'Mac',
      type: 'Mac_desktop',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    },
    {
      name: 'Linux',
      type: 'Linux_desktop',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    }]
  },
  {
    name: 'OortCloud AI Studio',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Windows',
      type: 'Windows_studio',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    },
    {
      name: 'Mac',
      type: 'Mac_studio',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    },
    {
      name: 'Linux',
      type: 'Linux_studio',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    },
    {
      name: '原始程序码',
      type: 'Source_code',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    }]
  },
  {
    name: 'OORT.SH',
    Download: 'Link',
    Changelog: 'Changelog',
    list: [{
      name: 'Web',
      type: 'Web',
      img1: '/img/demo/download/Google.png'
    }]
  },
  {
    name: 'OORT.AI',
    Download: 'Link',
    Changelog: 'Changelog',
    list: [{
      name: 'Web',
      type: 'Web',
      img1: '/img/demo/download/Google.png'
    }]
  },
  {
    name: 'VLStream',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'Windows',
      type: 'Windows',
      img1: '/img/demo/download/GitHub.png',
      img2: '/img/demo/download/disk.png'
    }]
  }
])

const industryList = ref([
  {
    name: '指挥调度',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android_zhdd',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS_zhdd',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'HarmonyOS',
      type: 'HarmonyOS_zhdd',
      img1: '/img/demo/download/HarmonyOS.png'
    }]
  },
  {
    name: 'AI智眼',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android_aizy',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS_aizy',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'HarmonyOS',
      type: 'HarmonyOS_aizy',
      img1: '/img/demo/download/HarmonyOS.png'
    }]
  },
  {
    name: '智慧园林',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android_zhyl',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS_zhyl',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'HarmonyOS',
      type: 'HarmonyOS_zhyl',
      img1: '/img/demo/download/HarmonyOS.png'
    }]
  },
  {
    name: '智慧安保',
    Download: 'Download',
    Changelog: 'Changelog',
    list: [{
      name: 'Android',
      type: 'Android_zhab',
      img1: '/img/demo/download/downloadAndroid.png'
    },
    {
      name: 'iOS',
      type: 'iOS_zhab',
      img1: '/img/demo/download/ios.png'
    },
    {
      name: 'HarmonyOS',
      type: 'HarmonyOS_zhab',
      img1: '/img/demo/download/HarmonyOS.png'
    }]
  }
])
const activeTab = ref('general')

const goDisk = (value) => {
  if (value === '/img/demo/download/disk.png') {
    window.open('http://prod.oort.oortcloudsmart.com:32610/oort/oortcloud-policefront/cloud_disk/index.html?accessToken=g02dce3c79a42653f0314ae2e1bdbebd0')
  }
}
const goGitHub = (value) => {
  if (value.name === 'OortCloud AI Studio') {
    window.open('https://github.com/OortCloudGroup/OortStudio/releases')
  } else if (value.name === 'OORT.SH') {
    window.open('https://sh.oortcloudsmart.com/zh/')
  } else if (value.name === 'OORT.AI') {
    window.open('https://ai.oortcloudsmart.com/zh/')
  } else if (value.name === 'OortCloud APP') {
    window.open('https://www.oortcloudsmart.com/zh/siteNew/instantMess#section2')
  } else if (value.name === 'OortCloud Desktop') {
    window.open('https://github.com/OortCloudGroup/OortCloudDesktop/releases ')
  }
}
definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}

.title{
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}
.title1{
  font-size: 16px;
  font-weight: 700;
}
.title2{
  font-size: 20px;
  font-weight: 700;
}
.margin20{
  margin-bottom: 20px;
}
.box1{
  background-color: #2278ff;
  padding: 48px 0 48px 262px;
}

.container{
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.left{
  width: 900px;
}
.right{
  width: 300px;
  .rightBox1{
    padding: 12px 24px;
    background-color: #2278ff;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 60px;
  }
  .rightBox2{
    background-color: #f9fafb;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 30px;
  }
}

.color-table-container {
  margin-bottom: 60px;
}

.color-table {
  width: 100%;
  border-collapse: collapse;
}

.color-table th,
.color-table td {
  padding: 15px 20px;
  text-align: left;
  font-size: 24px;
  border-bottom: 1px solid #dcdddf;
}
.color-table th{
  color: #000;
  font-size: 30px;
}

.color-table th {
  font-weight: bold;
}

.download{
  img{
    width: 52px;
    height: 52px;
    margin-right: 27px;
    cursor: pointer;
  }
}

.download_qin, .download_lan{
  cursor: pointer;
  width: 160px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #017E84;
  color: #017E84;
  border-radius: 8px;
}

.download_lan{
  border: 1px solid #007cfd;
  color: #007cfd;
}

.tab-switch {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin: 80px 0;
  padding: 0 270px;
  border-bottom: 1px solid #dcdddf;
}

.tab-item {
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 20px;
  cursor: pointer;
  color: #333333;
  margin-right: 100px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
}

.tab-item.active {
  color: #2278ff;
  border-bottom-color: #2278ff;
  font-weight: 700;
}

.color-table th:nth-child(1) {
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.color-table th:nth-child(2) {
  width: 235px;
}

.color-table th:nth-child(3) {
  width: 235px;
}

.color-table td:nth-child(1) {
  width: 320px;
}

.color-table td:nth-child(2) {
  width: 235px;
}

.color-table td:nth-child(3) {
  width: 235px;
}

</style>
