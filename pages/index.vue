<template>
  <div class="wrap">
    <HomeHot />
    <HomeTop />
  </div>
  <div class="clear"></div>
  <div class="wrap">
    <HomeUp />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '书友最值得收藏的网络小说阅读网',
  meta: [
    {
      name: 'keywords',
      content: '笔趣阁,无弹窗,小说阅读网,biquge',
    },
    {
      name: 'description',
      content: '笔趣阁是广大书友最值得收藏的网络小说阅读网，网站收录了当前最火热的网络小说，免费提供高质量的小说最新章节，是广大网络小说爱好者必备的小说阅读网。',
    },
  ],
  titleTemplate: useRuntimeConfig().public.siteName+'_%s',
});
</script>
