<script setup>
import {ref, watch} from "vue";

const props = defineProps(["username"]);
const myUsername = ref(props.username);

watch(() => props.username, newVal => {
  myUsername.value = newVal;
})

defineExpose({
  myUsername
})
</script>

<template>
  <fieldset class="fieldset">
    <label class="label text-base">用户名</label>
    <input class="input w-108" type="text" v-model="myUsername">
  </fieldset>

</template>

<style scoped>

</style>