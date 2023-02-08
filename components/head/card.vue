<template>
  <div class="nav">
    <ul>
      <li class="this">
        <NuxtLink to="/">首页</NuxtLink></li>
      <li v-for="sort in sorts" :key="sort.sortid">
        <NuxtLink :to="`/sort/${sort.sortid}/`" >{{ sort.sortname }}</NuxtLink></li>
      <li><NuxtLink to="/top">排行榜</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const {data:data} = await useFetch('/api/sort')
const sorts = data.value.Data
</script>

<style scoped>

</style>
