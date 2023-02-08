<template>
  <div class="book">
    <div class="path wap_none">
      <NuxtLink to="/">{{ useRuntimeConfig().public.siteName }}</NuxtLink>
      &gt; {{ info.book.book_type_name }} &gt; {{ info.book.book_name }}全文免费阅读
      <span class="oninfo">
        <NuxtLink :to="`/info/${bookId}/0/`"><el-button >开始阅读</el-button></NuxtLink>
      </span>
    </div>
    <div class="info">
      <div class="cover">
        <LazyNuxtImg onerror="this.src='/images/default.jpg'" :src="info.book.book_img" :alt="info.book.book_name" /></div>
      <h1>{{ info.book.book_name }}</h1>
      <div class="small">
        <span>作者：{{ info.book.book_author }}</span>
        <span>状态：{{ info.book.is_finish == false ? "连载" : "完结" }}</span>
        <span class="last">更新：{{ info.book.create_time }}</span>
        <span class="last">最新：<NuxtLink :to="`/info/${bookId}/${lastNum}/`">{{ info.book.last_chaptername }}</NuxtLink></span></div>
      <div class="intro">
        <dl>
          <dt>内容简介：</dt>
          <dd>{{info.book.book_intro}}</dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="listmain">
    <dl>
      <dt>{{ info.book.book_name }}最新章节列表</dt>
      <dd v-for="chapter in chapterlist" :key="chapter.chapter_id">
        <NuxtLink :to="`/info/${bookId}/${chapter.chapter_index}/`">{{ chapter.chapter_name }}</NuxtLink></dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
const currentPage = ref(0)
const bookId = useRoute().params.id
const {data:data} = await useFetch('/api/info/',{
  params:{
    bookId: bookId,
  }
});
const info = data.value.Data
const dataList = async () => {
  const {data: chapter} = await useFetch('/api/chapterListPage/', {
    params: {
      bookId: bookId,
      page: currentPage.value,
    }
  });
  return chapter.value.Data
}
const chapterCount = data.value.Data.chapter_count
let chapterlist = await dataList()
const lastNum = chapterCount -  1
useHead({
  title: `《${info.book.book_name}最新章节列表_${info.book.book_name}(${info.book.book_author})小说全文免费阅读`,
  meta: [
    {
      name: 'keywords',
      content: `${info.book.book_name}最新章节列表,${info.book.book_name}小说全文免费阅读,${info.book.book_author}小说`,
    },
    {
      name: 'description',
      content: `${info.book.book_name}最新章节由网友提供，《${info.book.book_name}》情节跌宕起伏、扣人心弦，是一本情节与文笔俱佳的${info.book.book_type_name}小说，${useRuntimeConfig().public.siteName}免费提供${info.book.book_name}最新清爽干净的文字章节在线阅读。`,
    },
  ],
  titleTemplate: '%s_'+useRuntimeConfig().public.siteName,
});
</script>

<style scoped>

</style>
