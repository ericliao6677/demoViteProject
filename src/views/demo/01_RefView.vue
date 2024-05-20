<script setup>
import { reactive, ref } from 'vue';

//筆記: ref()接收參數，並將其包裹在一個帶有.value屬性的ref 物件中傳回：
//筆記: 改變了這個ref 的值時，Vue 會自動偵測到這個變化，並且相應地更新DOM
const count = ref(0);
console.log(count); // { value: 0 }
console.log(count.value); // 0

const count1 = ref(0);
const state = reactive({ count1 });
console.log('state' + ' ' + state.count1); // 0
state.count1 = 1;
console.log('count1' + ' ' + count1.value);

const titleClass = ref('');
</script>
<template>
  <div>
    <input type="text" v-model="titleClass" />
    <!--模板中存取的message ref 時不需要使用.value-->
    <h1>{{ titleClass }}</h1>
  </div>
</template>
<style></style>
