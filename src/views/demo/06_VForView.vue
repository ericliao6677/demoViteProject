<script setup>
import { ref } from 'vue';

let id = 0;
const listItemInit = ref({ id: 0, name: '', title: '' });
const listItem = ref({ id: 0, name: '', title: '' });

const list = ref([
  { id: id++, name: 'Andy', title: 'Learn c#' },
  { id: id++, name: 'Alen', title: 'Learn c++' },
  { id: id++, name: 'Amy', title: 'Learn c' }
]);

const addRow = () => {
  if (listItem.value.name && listItem.value.title) {
    list.value.push({
      id: id++,
      name: listItem.value.name,
      title: listItem.value.title
    });
    console.log(list.value);
    listItem.value = listItemInit.value;
  } else {
    return;
  }
};

const deleteRow = (row) => {
  list.value = list.value.filter((t) => t !== row);
};
</script>
<template>
  <div>
    <h2>學習清單</h2>
    <input v-model="listItem.name" placeholder="name" />
    <input v-model="listItem.title" placeholder="title" />
    <button @click="addRow">Add+</button>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>title</th>
        <th>delete</th>
      </tr>
      <!--唯一的id，並將它作為特殊的keyattribute綁定到每個<tr>。key使得Vue 能夠精確的移動每個<tr>，以匹配對應的物件在陣列中的位置。-->
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.title }}</td>
        <td><button @click="deleteRow(item)">X</button></td>
      </tr>
    </table>
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
