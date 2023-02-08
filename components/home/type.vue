<template>
  <div class="type">
    <div class="block" v-for="type in types" :key="type.id">
      <h2>{{ type.title }}</h2>
      <div class="block_top">
        <div class="image">
          <NuxtLink :to="`/info/${type.top.id}/`">
          <img :src="type.top.img" :alt="type.top.title"></NuxtLink>
        </div><dl><dt><a :to="`/info/${type.top.id}/`">{{ type.top.title }}</a>
      </dt>
        <dd>{{ type.top.desc }}......</dd></dl></div>
      <ul class="lis">
        <li v-for="list in type.list" :key="list.id">
          <span class="s1">[{{ list.type }}]</span>
          <span class="s2"><NuxtLink :to="`/info/${list.id}/`">{{ list.title }}</NuxtLink></span>
          <span class="s3">{{ list.author }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const types = reactive([
  {
    id: 1,
    title: '武侠仙侠',
    top: {
      id: 1,
      title: '妖刀记',
      img: 'https://www.tokew.com/bookimg/110967.jpg',
      desc: '东胜洲东海道，时间是白马王朝承宣七年。江湖子弟江湖老，距离那场逐鹿天下的央土......',
    },
    list: [
      {
        id: 1,
        type: '武侠',
        title: '神雕侠侣',
        author: '金庸',
      },
      {
        id: 2,
        type: '武侠',
        title: '神雕侠侣',
        author: '金庸',
      }
    ],
  },
  {
    id: 2,
    title: '修真小说',
    top: {
      id: 1,
      title: '妖刀记',
      img: 'https://www.tokew.com/bookimg/110967.jpg',
      desc: '东胜洲东海道，时间是白马王朝承宣七年。江湖子弟江湖老，距离那场逐鹿天下的央土......',
    },
    list: [
      {
        id: 3,
        type: '武侠',
        title: '神雕侠侣4',
        author: '金庸',
      },
      {
        id: 2,
        type: '武侠',
        title: '神雕侠侣3',
        author: '金庸',
      }
    ],
  },
])
</script>

<style scoped>

</style>
