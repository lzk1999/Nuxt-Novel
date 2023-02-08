<template>
  <div class="wrap">
    <div class="login">
      <h2>用户注册</h2>
      <p>手机号：</p>
      <p><input class="text" id="username" name="username" type="text" size="20" maxlength="30"></p>
      <p>密码：</p>
      <p><input class="text" id="password" size="20" maxlength="30" type="password" name="password"></p>
      <p>重复密码：</p>
      <p><input class="text" id="repassword" size="20" maxlength="30" type="password" name="repassword"></p>
      <p><span id="dy_tips"></span></p>
      <p><input type="submit" @click="regBtn" class="btn" value="确认注册"></p>
      <p><NuxtLink class="btn" to="/user/login">已有账号，点击登录</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const regBtn = () => {
    ElMessage({
      message: '当前使用第三方接口，无法注册',
      type: 'success',
    })
}
</script>

<style scoped>

</style>
