<script setup>
import { ref } from 'vue';
const titleClass = ref('title-red');
const subTitleClass = ref('subTitle');
const props = ref('prop1');
</script>
<template>
  <div>
    <input type="text" v-model="titleClass" />
    <!--筆記
      1. 綁定html attribute，:class, :style ...
      2. v-bind:class => :class
    -->
    <h1 v-bind:class="titleClass">make me red</h1>
    <h2 :class="subTitleClass">Here is SubTitle</h2>

    <input v-model="props" />
    <h3 :data-props="props">data-props attribute的值變為{{ props }}</h3>
  </div>
</template>
<style scoped>
.title-red {
  color: red;
}
.title-green {
  color: green;
}
.title-yellow {
  color: yellow;
}
.subTitle {
  font-size: 15px;
  color: green;
}
</style>
