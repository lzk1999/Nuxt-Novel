<template>
  <div class="wrap rank">
    <div class="blocks">
      <h2>总排行</h2>
      <ul>
        <li v-for="all in allTop">
          <NuxtLink :to="`/info/${all.book_id}/`">{{ all.book_name }}</NuxtLink>/{{ all.book_author }}
        </li>
      </ul>
    </div>
    <div class="blocks">
      <h2>月排行</h2>
      <ul>
        <li v-for="all in monTop">
          <NuxtLink :to="`/info/${all.book_id}/`">{{ all.book_name }}</NuxtLink>/{{ all.book_author }}
        </li>
      </ul>
    </div>
    <div class="blocks">
      <h2>最多收藏</h2>
      <ul>
        <li v-for="all in scTop">
          <NuxtLink :to="`/info/${all.book_id}/`">{{ all.book_name }}</NuxtLink>/{{ all.book_author }}
        </li>
      </ul>
    </div>
    <div class="blocks">
      <h2>字数排行</h2>
      <ul>
        <li v-for="all in wordTop">
          <NuxtLink :to="`/info/${all.book_id}/`">{{ all.book_name }}</NuxtLink>/{{ all.book_author }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const {data:allTopData}:any = await useFetch('/api/rank/',{
  params:{
    rankId: 1,
  }
});
const allTop = allTopData.value.Data.DataList
const {data:monTopData}:any = await useFetch('/api/rank/',{
  params:{
    rankId: 2,
  }
});
const monTop = monTopData.value.Data.DataList
const {data:scTopData}:any = await useFetch('/api/rank/',{
  params:{
    rankId: 7,
  }
});
const scTop = scTopData.value.Data.DataList
const {data:wordTopData}:any = await useFetch('/api/rank/',{
  params:{
    rankId: 8,
  }
});
const wordTop = wordTopData.value.Data.DataList
</script>

<style scoped>

</style>
