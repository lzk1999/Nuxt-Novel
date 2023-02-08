<template>
  <div class="wrap">
    <div class="login">
      <h2>用户登陆</h2>
      <p>手机号：</p>
      <p><input class="text" id="username" name="username" type="text" size="20" maxlength="30" value=""></p>
      <p>密码：</p>
      <p><input class="text" id="password" size="20" maxlength="30" type="password" name="password" value=""></p>
      <p><span id="dy_tips"></span></p>
      <p><input @click="loginBtn" class="btn" type="submit"  value="确认登录"></p>
    </div>
  </div>
</template>
<script setup lang="ts">
const loginBtn = () => {
  ElMessage({
    message: '当前使用第三方接口，无法登录',
    type: 'success',
  })
}
</script>

<style scoped>

</style>
