<template>
  <div class="up">
    <div class="r bd">
      <h2>最新入库小说</h2>
      <ul>
        <li v-for="time in timeList" :key="time.book_id">
          <span class="s1">[{{ time.book_type_name.substring(0,2) }}]</span>
          <span class="s2"><NuxtLink :to="`/info/${time.book_id}/`">{{ time.book_name.substring(0,8) }}</NuxtLink></span>
          <span class="s5">{{ time.book_author.substring(0,5) }}</span></li>
      </ul>
    </div>
    <div class="l bd">
      <h2> 最近更新小说列表</h2>
      <ul>
        <li v-for="up in upList" :key="up.book_id">
          <span class="s1">[{{ up.book_type_name.substring(0,2) }}]</span>
          <span class="s2"><NuxtLink :to="`/info/${up.book_id}/`">{{ up.book_name }}</NuxtLink></span>
          <span class="s3"><NuxtLink :to="`/info/${up.book_id}/`">{{ up.lastchapter }}</NuxtLink></span>
          <span class="s4">{{ up.book_author }}</span>
          <span class="s5">{{ up.lastupdate.substring(5,10) }}</span></li>
     </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const {data:upData}:any = await useFetch('/api/uplist/',{
  params:{
    channel: 5,
  }
});
const upList = upData.value.Data.DataList
const {data:timeData}:any = await useFetch('/api/uplist/',{
  params:{
    channel: 6,
  }
});
const timeList = timeData.value.Data.DataList
</script>

<style scoped>

</style>
