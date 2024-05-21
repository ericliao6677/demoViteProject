<script setup>
import { ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  const responseData = await response.json();
  console.log(responseData);
  todoData.value = responseData;
};

const nextData = async () => {
  todoId.value++;
  getData();
};
getData();

watch(todoData, (newData) => {
  console.log(todoData, newData);
});
</script>
<template>
  <div>
    <h5>{{ todoId }}</h5>
    <button v-on:click="nextData">next data</button>
    <div>
      <ul>
        <li>userId: {{ todoData.userId }}</li>
        <li>id: {{ todoData.id }}</li>
        <li>title: {{ todoData.title }}</li>
        <li>completed: {{ todoData.completed }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
table,
th,
td {
  border: 1px solid white;
  border-collapse: collapse;
  padding: 10px;
}
</style>
