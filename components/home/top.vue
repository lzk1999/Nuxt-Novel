<template>
  <div class="top">
    <h2>强力推荐</h2>
    <ul class="lis">
      <li v-for="top in topList.slice(0,9)" :key="top.book_id">
        <span class="s1">[{{ top.book_type_name.substring(0,2) }}]</span>
        <span class="s2"><NuxtLink :to="`/info/${top.book_id}/`">{{ top.book_name }}</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const {data:topData}:any = await useFetch('/api/uplist/',{
  params:{
    channel: 3,
  }
});
const topList = topData.value.Data.DataList
</script>
