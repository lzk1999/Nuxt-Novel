<template>
  <div class="logo">
    <NuxtLink to="/" >{{ useRuntimeConfig().public.siteName  }}</NuxtLink>
  </div>
  <div class="search">
    <form action="/so">
      <input type="search"  class="text" name="q" placeholder="可搜书名和作者，请您少字也别输错字。"  />
      <input type="submit" class="btn" value="">
    </form>
  </div>
  <div class="share">
    <NuxtLink to="/user/bookcase/">阅读记录</NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
