<template>
  <div class="home_page vls">
    <div class="title box1">
      下载
    </div>
    <div class="w1380">
      <div class="container">
        <div class="left">
          <div class="color-table-container">
            <table class="color-table">
              <thead>
                <tr>
                  <th>云课堂</th>
                  <th>社区版</th>
                  <th>企业版</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in colorList" :key="color.name">
                  <td>{{ color.name }}</td>
                  <td>
                    <div class="download_qin">
                      下载
                    </div>
                  </td>
                  <td>
                    <div class="download_lan">
                      下载
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="color-table-container">
            <table class="color-table">
              <thead>
                <tr>
                  <th>智能审批</th>
                  <th>社区版</th>
                  <th>企业版</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in colorList" :key="color.name">
                  <td>{{ color.name }}</td>
                  <td>
                    <div class="download_qin">
                      下载
                    </div>
                  </td>
                  <td>
                    <div class="download_lan">
                      下载
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="color-table-container">
            <table class="color-table">
              <thead>
                <tr>
                  <th>指挥调度</th>
                  <th>社区版</th>
                  <th>企业版</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in colorList" :key="color.name">
                  <td>{{ color.name }}</td>
                  <td>
                    <div class="download_qin">
                      下载
                    </div>
                  </td>
                  <td>
                    <div class="download_lan">
                      下载
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
import { ref } from 'vue'
const colorList = ref([
  {
    name: 'Windows'
  },
  {
    name: 'Android'
  },
  {
    name: 'iOS'
  },
  {
    name: '原始程序码'
  }
])
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
  // font-family: Arial, sans-serif;
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

.download_qin, .download_lan{
  cursor: pointer;
  width: 120px;
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

</style>
