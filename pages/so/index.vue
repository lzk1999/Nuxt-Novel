<template>
  <div class="wrap">
  <div class="so_list bookcase">
    <h2> 与“{{ soName }}”相关的小说 -  (每页展示15条)</h2>
    <div class="type_show">
      <div class="bookbox" v-for="so in soList" :key="so.book_id">
        <div class="box">
          <div class="bookimg">
            <NuxtLink :to="`/info/${so.book_id}/`">
              <NuxtImg onerror="this.src='/images/default.jpg'" :src="so.book_img" /></NuxtLink>
          </div>
          <div class="bookinfo">
            <h4 class="bookname"><NuxtLink :to="`/info/${so.book_id}/`">{{ so.book_name }}</NuxtLink></h4>
            <div class="author">作者：{{ so.book_author }}</div>
            <div class="uptime">　　{{ so.book_intro }}……</div>
          </div>
        </div>
      </div>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const soName = useRoute().query.q
const {data:data} = await useFetch('/api/serch/',{
  params:{
    key: soName,
    page: 1,
  }
});
const soList = data.value.Data.DataList
</script>

<style scoped>

</style>
