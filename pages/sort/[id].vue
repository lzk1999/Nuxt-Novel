<template>
  <div class="wrap class">
    <div class="hot">
      <div class="item" v-for="book in sortLists" :key="book.articleid">
        <div class="image">
          <NuxtLink :to="`/info/${book.articleid}/`">
            <LazyNuxtImg onerror="this.src='/images/default.jpg'" width="120" height="150" :src="book.urlimg" loading="lazy" />
          </NuxtLink>
        </div>
        <dl><dt>
          <span>{{ book.author }}</span>
          <NuxtLink :to="`/info/${book.articleid}/`">{{ book.articlename }}</NuxtLink></dt>
          <dd>{{ book.intro }}......</dd></dl></div>
     </div>
  </div>
    <div class="text-center m-auto w-20 w-10 h-10 m-3 lg:pl-96 sm:pl-10">
  <div class="search">
    <el-pagination background :current-change="sizeChan()" v-model:current-page="currentPage"  layout="prev, pager, next" :total="1000" />
  </div>
  </div>
</template>

<script setup lang="ts">
const currentPage = ref(1)
const dataList = async () => {
  const {data: data} = await useFetch('/api/sortList', {
    params: {
      sortId: useRoute().params.id,
      page: currentPage.value
    }
  })
  return data.value.Data
}

let sortLists = await dataList()
const sizeChan = async () => {
  sortLists = await dataList()
}
useHead({
  title: '分类',
  titleTemplate: '%s - 笔趣阁',
})
</script>

<style scoped>

</style>
