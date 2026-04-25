import { createRouter, createWebHistory } from 'vue-router'
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage-index",
      component: HomepageIndex,
      meta: {
        title: "主页"
      }
    },
    {
      path: "/friend",
      name: "friend-index",
      component: FriendIndex,
      meta: {
        title: "我的好友"
      }
    },
    {
      path: "/create",
      name: "create-index",
      component: CreateIndex,
      meta: {
        title: "开始创作"
      }
    },
    {
      path: "/404",
      name: "404",
      component: NotFoundIndex,
      meta: {
        title: "页面丢失"
      }
    },
    {
      path: "/user/account/login",
      name: "user-account-login-index",
      component: LoginIndex,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/user/account/register",
      name: "user-account-register-index",
      component: RegisterIndex,
      meta: {
        title: "注册"
      }
    },
    {
      path: "/user/space/:user_id",
      name: "user-space-index",
      component: SpaceIndex,
      meta: {
        title: "个人空间"
      }
    },
    {
      path: "/user/profile",
      name: "user-profile-index",
      component: ProfileIndex,
      meta: {
        title: "个人资料"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundIndex,
      name: '404'
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "默认标题";
  }
  next();
});

export default router