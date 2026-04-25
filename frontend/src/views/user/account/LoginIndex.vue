<script setup>

</script>

<template>
  <div class="flex justify-center mt-30">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">登录你的账号</legend>

      <label class="label">用户名</label>
      <input type="text" class="input" placeholder="请输入用户名..." />

      <label class="label">密码</label>
      <input type="password" class="input" placeholder="请输入密码..." />

      <button class="btn btn-accent mt-4">登录</button>

      <div class="text-center mt-2">
        <span class="text-base">还没有账号? </span>
        <router-link :to="{name: 'user-account-register-index'}" class="link link-primary">
          <span class="text-base">立即注册</span>
        </router-link>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>

</style>