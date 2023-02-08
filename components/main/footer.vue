<template>
  <div class="footer_wap pc_none">
    <a href="#top"><svg class="lnr lnr-arrow-up-circle"><use xlink:href="#lnr-arrow-up-circle"></use></svg></a>
    <p class="version channel">
      <NuxtLink to="/">首页</NuxtLink>
      <NuxtLink to="/user/bookcase/">我的书架</NuxtLink>
      <NuxtLink to="/user/bookcase/" >阅读记录</NuxtLink>
    </p>
  </div>
  <div class="footer wap_none">
    <hr>
    <p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
  </div>
  <el-backtop :right="30" :bottom="30" />
</template>
