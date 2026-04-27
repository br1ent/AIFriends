<script setup>
import Photo from "@/views/user/profile/components/Photo.vue";
import Username from "@/views/user/profile/components/Username.vue";
import Profile from "@/views/user/profile/components/Profile.vue";
import {useUserStore} from "@/stores/user.js";

const user = useUserStore();
</script>

<template>
  <div class="flex justify-center">
    <div class="card bg-base-200 shadow-sm w-120 mt-16">
      <div class="card-body">
        <h3 class="text-lg font-bold my-4">编辑资料</h3>
        <Photo :photo="user.photo" />
        <Username :username="user.username" />
        <Profile :profile="user.profile" />
        <div class="flex justify-center">
          <button class="btn btn-accent w-60 mt-4">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>