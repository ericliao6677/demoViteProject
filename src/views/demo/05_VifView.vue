<script setup>
import { ref } from 'vue';

const isAweson = ref(true);
const changeStatus = () => {
  isAweson.value = !isAweson.value;
};
</script>
<template>
  <div>
    <button @click="changeStatus">Toggle</button>
    <h1 v-if="isAweson">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>
<style></style>
