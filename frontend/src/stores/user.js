import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(1)
    const username = ref("brent")
    const photo = ref("http://127.0.0.1:8000/media/user/photos/default.png")
    const profile = ref("1")
    const accessToken = ref("1")

    function isLogin() {
        // 判断accessToken是否为空
        return !!accessToken.value
    }

    function setAccessToken(token) {
        accessToken.value = token
    }

    function setUserInfo(data) {
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }

    function logout() {
        id.value = 0
        username.value = ""
        photo.value = ""
        profile.value = ""
        accessToken.value = ""
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
        isLogin
    }
})