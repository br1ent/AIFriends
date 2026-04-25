<script setup>

</script>

<template>
  <div class="flex justify-center mt-30">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">注册你的账号</legend>

      <label class="label">用户名</label>
      <input type="text" class="input" placeholder="请输入用户名..." />

      <label class="label">密码</label>
      <input type="password" class="input" placeholder="请输入密码..." />

      <label class="label">确认密码</label>
      <input type="password" class="input" placeholder="请确认密码..." />

      <button class="btn btn-accent mt-4">注册</button>

      <div class="text-center mt-2">
        <span class="text-base">已有账号? </span>
        <router-link :to="{name: 'user-account-login-index'}" class="link link-primary">
          <span class="text-base">返回</span>
        </router-link>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>

</style>