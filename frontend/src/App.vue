<template>
  <NavBar>
    <RouterView/>
  </NavBar>
</template>

<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
import {onMounted} from "vue";
import api from "@/js/http/api.js";
import {useUserStore} from "@/stores/user.js";
import {useRoute, useRouter} from "vue-router";


const user = useUserStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  try {
    const res = await api.get("/api/user/account/get_user_info/");
    const data = res.data;
    if (data.result === "success") {
      user.setUserInfo(data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    user.setHasPullUserInfo(true);

    if (route.meta.requireAuth && !user.isLogin()) {
      await router.replace({
        name: "user-account-login-index"
      });
    }
  }
})
</script>

<style scoped>
</style>