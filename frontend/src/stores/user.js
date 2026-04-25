import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(0);
    const username = ref("");
    const photo = ref("");
    const profile = ref("");
    const accessToken = ref("");
    const hasPullUserInfo = ref(false);

    function isLogin() {
        // 判断accessToken是否为空
        return !!accessToken.value;
    }

    function setAccessToken(token) {
        accessToken.value = token;
    }

    function setUserInfo(data) {
        id.value = data.user_id;
        username.value = data.username;
        photo.value = data.photo;
        profile.value = data.profile;
    }

    function logout() {
        id.value = 0;
        username.value = "";
        photo.value = "";
        profile.value = "";
        accessToken.value = "";
    }

    function setHasPullUserInfo(newStatus) {
        hasPullUserInfo.value = newStatus;
    }

    return {
        id,
        username,
        accessToken,
        photo,
        profile,
        setUserInfo,
        setAccessToken,
        logout,
        isLogin,
        setHasPullUserInfo,
        hasPullUserInfo,
    }
})