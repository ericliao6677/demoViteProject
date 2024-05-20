<script setup>
import { ref } from 'vue';
const count = ref(0);
const plus = () => {
  count.value++;
};
</script>
<template>
  <div>
    <h1>{{ count }}</h1>
    <!--
      筆記
        1. v-on:click => @click
    -->
    <button @click="plus()">plus</button>
  </div>
</template>
<style></style>
