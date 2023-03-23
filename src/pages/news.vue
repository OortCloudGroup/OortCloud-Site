<template>
  <div class="page_container">
    <div class="news_banner">
      <h5>新闻动态</h5>
      <span>官方发布的最新动态或消息，为您提供第一手资讯</span>
    </div>
    <div class="div_item">
        <a v-for="(item, index) in newsList" :href="'http://oortcloudsmart.com/oort-news/oortnews/' + item.ID">
          <div class="div_item_box">
            <div class="news">
              <img :src="item.CoverImg">
            </div>
            <div>
                <span class="div_item_span">{{ item.Title }}</span>
                <span class="div_item_span1">{{ item.Time }}</span>
            </div>
          </div>
      </a>
    </div>
    <!--分页-->
    <div class="div_ie9_4" style="display: flex;align-items: center;justify-content: center;min-width: 348px;">
      <ul id="pages">
        <li id="pre_page" style="min-width: 94px" class="number" @click="prePage">上一页</li>
        <ul id="page">
          <li style='min-width: 94px;'>{{ pageIndex }}/ {{  total }}</li>
        </ul>
        <li id="next_page" style="min-width: 94px" class="number" @click="nextPage">下一页</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Resp {
  code: number,
  data: any
}

const newsList = ref([])
const pageIndex = ref(1)
const total = ref(0)
const url =  'https://www.oortcloudsmart.com/oort/oortcloud-cetcnewsservice/api/v1/cetcnewservice/new_list'

// onMounted(async ()=>{
//     getNewsList()
// })

getNewsList()

async function getNewsList() {
  const params = {
    pageIndex: pageIndex.value,
    pageSize: 6,
    newsType: 1,
    status: 1
  }
  const { data } = await useFetch(url,  { body: params, method: 'post'})
  const res:Resp = toRaw(data.value) as Resp
  if (res.code === 200) {
    newsList.value = res.data.list
    total.value = res.data.count / 6
  }
}

function prePage() {
  if(pageIndex.value > 1) {
    pageIndex.value --
    getNewsList()
  }
}

function nextPage() {
  if(pageIndex.value < total.value) {
    pageIndex.value ++
    getNewsList()
  }
}

</script>

<style scoped lang="scss">
  .news_banner {
    width: 100%;
    height: 300px;
    background-image: url('../assets/img/news_banner.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      color: #fff;
      font-size: 22px;
    }
    span {
      margin: 20px;
      font-size: 16px;
      color: #fff;
    }
  }

  
.div_item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    max-width: 1240px;
}
.div_item>a{
    display: block;
}


.div_item_box {
    width: 350px;
    min-height: 310px;
    display: flex;
    margin: 0 20px;
    flex-direction: column;
    padding-bottom: 41px;
}

.div_item_box div {
    display: flex;
    flex-direction: column;
    background: #F8F8F8;
    min-height: 170px;
}

.div_item_box img {
    width: 350px;
    height: 270px;
    object-fit: cover;
    margin-bottom: 2px;
}

.div_item_span {
    font-size: 18px;
    padding: 34px 26px 18px 26px;
    min-height: 68px;
    color: #333333;
    font-weight: bold;
    line-height: 24px;
}

.div_item_span1 {
    font-size: 16px;
    color: #999999;
    margin: 20px 0 0 28px;
}

#page {
    display: flex;
    align-items: center;
    justify-content: center;
}

#pages {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 68px 0 80px 0;
}

#pages li {
    width: 30px;
    height: 30px;
    margin: 0 6px;
    text-align: center;
    line-height: 28px;
}

#page li {
    width: 30px;
    height: 30px;
    margin: 0 6px;
    text-align: center;
    line-height: 28px;
}

#pages li.number {
    background: #FAFAFA;
    border: 1px solid #C6CBD4;
    border-radius: 2px;
    font-size: 14px;
    color: #525A6F;
    letter-spacing: 0;
}

#page li.number {
    background: #FAFAFA;
    border: 1px solid #C6CBD4;
    border-radius: 2px;
    font-size: 14px;
    color: #525A6F;
    letter-spacing: 0;
}

#pages li.active {
    background: #5378B7;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
}

#page li.active {
    background: #5378B7;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
}

.news {
    overflow: hidden;
}

.news img {
    cursor: pointer;
    transition: transform 0.6s; /*设置过渡时间*/
}

.news img:hover {
    transform: scale(1.1, 1.1);
}

.div_item_span:hover {
    color: #5378B7;
}

#pre_page {
    background: #FAFAFA;
}

#pre_page:hover {
    cursor: pointer;
    background: #5378B7;
}

#next_page:hover {
    cursor: pointer;
    background: #5378B7;
}

a:link {
  text-decoration: none;
}

  
</style>