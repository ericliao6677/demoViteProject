<script setup>
import { ref } from 'vue';

const text = ref('');

const onInput = (e) => {
  text.value = e.target.value;
};
</script>

<template>
  <!--使用v-bind及v-on方法-->
  <input :value="text" @input="onInput" placeholder=":value, @input輸入" />
  <input v-bind:value="text" v-on:input="onInput" placeholder="v-bind:value, v-on:input輸入" />

  <!--使用v-model-->
  <input v-model="text" placeholder="v-model 輸入" />

  <p>{{ text }}</p>
</template>
