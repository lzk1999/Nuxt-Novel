<template>
    <div class="hot" >
      <div class="item" v-for="hot in hotList.slice(8,12)" :key="hot.book_id">
        <div class="image">
          <NuxtLink :to="`/info/${hot.book_id}/`">
            <LazyNuxtImg onerror="this.src='/images/default.jpg'" :src="hot.book_img" loading="lazy" />
          </NuxtLink>
        </div>
        <dl>
          <dt>
            <span>{{ hot.book_author }}</span>
            <NuxtLink :to="`/info/${hot.book_id}/`">{{ hot.book_name }}</NuxtLink>
          </dt>
          <dd>{{ hot.book_intro }}......</dd></dl>
      </div>
    </div>
</template>
<script setup lang="ts">
const {data:hotData}:any = await useFetch('/api/uplist/',{
  params:{
    channel: 1,
  }
});
const hotList = hotData.value.Data.DataList
</script>
