<template>
  <a :href="'http://oortcloudsmart.com/oort-news/oortnews/' + id">
    <div class="div_item_box">
      <div class="news">
        <img :src="baseUrl + coverImage" />
      </div>
      <div>
        <span class="div_item_span">{{ title }}</span>
        <span class="div_item_span1">{{ time }}</span>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  time: String,
  coverImg: String,
  id: Number
})

const baseUrl = ref('https://www.oortcloudsmart.com')
const coverImage = computed(() => props.coverImg?.split('32610')[1])

</script>

<style setup lang="scss">

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
    padding: 20px 26px 18px 26px;
    color: #333333;
    font-weight: bold;
    line-height: 24px;
    height: 80px;
    overflow:hidden;
}

.div_item_span1 {
    font-size: 16px;
    color: #999999;
    margin: 10px 0 0 10px;
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

</style>
