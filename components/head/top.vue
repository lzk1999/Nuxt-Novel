<template>
  <div class="header_wap pc_none">
    <NuxtLink class="home" to="/">
      <svg class="lnr lnr-home"><use xlink:href="#lnr-home"></use></svg>
    </NuxtLink>
    <span class="title">{{ useRuntimeConfig().public.siteName }}</span>
    <NuxtLink class="user" to="/user/bookcase/">
      <svg class="lnr lnr-user"><use xlink:href="#lnr-user"></use></svg>
    </NuxtLink>
  </div>
  <div class="header_top">
    <div class="wrap">
      <div class="topcase">欢迎来到{{ useRuntimeConfig().public.siteName }}小说网!</div>
      <div class="toplogin">
        <NuxtLink class="loginbtn" to="/user/login/">登陆</NuxtLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NuxtLink to="/user/register/">用户注册</NuxtLink></div></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
