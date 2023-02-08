<template>
  <div class="book reader dark:bg-dark	">
    <div class="path wap_none">
      <NuxtLink href="/">{{ useRuntimeConfig().public.siteName }}</NuxtLink> &gt;
      <NuxtLink :to="`/info/${bookId}/`">{{ info.book.book_name }}</NuxtLink>
      &gt; {{chapterlist[chapterId].title}}</div>
    <div class="content">
      <h1 class="wap_none">{{chapterlist[chapterId].title}}</h1>
      <div class="text-center text-2xl leading-8 pc_none m-0.5">
        {{chapterlist[chapterId].title}}
      </div>
      <div class="Readpage pc_none">
        <NuxtLink :to="`/info/${bookId}/${prevId}/`" id="pb_prev" class="Readpage_up">上一章</NuxtLink>
        <NuxtLink :to="`/info/${bookId}/`" id="pb_mulu" class="Readpage_up">目录</NuxtLink>
        <NuxtLink :to="`/info/${bookId}/${nuxtId}/`" id="pb_next" class="Readpage_up">下一章</NuxtLink>
      </div>
      <div id="chaptercontent" class="Readarea ReadAjax_content">
        <div style="white-space: pre-wrap;">{{context}}</div>
        <div class="Readpage">
          <NuxtLink :to="`/info/${bookId}/${prevId}/`" id="pb_prev" class="Readpage_up">上一章</NuxtLink>
          <NuxtLink :to="`/info/${bookId}/`" id="pb_mulu" class="Readpage_up">目录</NuxtLink>
          <NuxtLink :to="`/info/${bookId}/${nuxtId}/`" id="pb_next" class="Readpage_up">下一章</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookId = useRoute().params.group
const chapterId = useRoute().params.id
const cid = parseInt(chapterId.toString())
const {data:data} = await useFetch('/api/info/',{
  params:{
    bookId: bookId,
  }
});
const info = data.value.Data
const {data:chapter} = await useFetch('/api/chapterlist/',{
  params:{
    bookId: bookId,
  }
});
const chapterlist = chapter.value.mixToc.chapters
const {data:chapterContext}:any = await useFetch('/api/chapter/',{
  params:{
    bookId: bookId,
    chapterId: chapterlist[cid].link,
  }
});
const context = chapterContext.value.chapter.body
let nuxtId = 0
let prevId = 0
if (cid < chapterlist.length && cid > 0) {
  nuxtId = cid + 1
  prevId = cid - 1
}else if (cid == 0){
  prevId = 0
  nuxtId = cid + 1
}
useHead({
  title:`${chapterlist[cid].title}_${info.book.book_name}`,

  titleTemplate: '%s_'+useRuntimeConfig().public.siteName,
})
</script>

<style scoped>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
