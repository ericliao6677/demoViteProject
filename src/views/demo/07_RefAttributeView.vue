<script setup>
import { ref, onMounted } from 'vue';
//筆記: ref是一個特殊的attribute，和v-for章節中提到的key類似。允許我們在一個特定的DOM 元素或子元件實例被掛載後，獲得對它的直接引用。
//筆記: ref 使用null值來初始化。這是因為當執行時，DOM 元素還不存在。模板引用ref 只能在元件掛載後存取
const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = 'mounted!';
  console.log(`the component is now mounted.`);
});
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>
