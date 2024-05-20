<script setup>
import { ref, computed } from 'vue';

let id = 0;
const listItemInit = ref({ id: 0, name: '', title: '', done: false });
const listItem = ref({ id: 0, name: '', title: '', done: false });
const hideCompleted = ref(false);

const list = ref([
  { id: id++, name: 'Andy', title: 'Learn c#', done: false },
  { id: id++, name: 'Alen', title: 'Learn c++', done: false },
  { id: id++, name: 'Amy', title: 'Learn c', done: false }
]);

const addRow = () => {
  if (listItem.value.name && listItem.value.title) {
    list.value.push({
      id: id++,
      name: listItem.value.name,
      title: listItem.value.title,
      done: false
    });
    console.log(list.value);
    listItem.value = listItemInit;
  } else {
    return;
  }
};

const deleteRow = (row) => {
  //筆記:filter()，concat()和slice()，這些都不會更改原陣列，而是返回一個新陣列。當遇到的是非變更方法時，我們需要將舊的陣列替換為新的：
  list.value = list.value.filter((t) => t !== row);
};

//筆記:建議使用計算屬性來描述依賴響應式狀態的複雜邏輯
const filteredTodos = computed(() => {
  return hideCompleted.value ? list.value.filter((t) => t.done === false) : list.value;
});
</script>
<template>
  <div>
    <h2>學習清單</h2>
    <input v-model="listItem.name" placeholder="name" />
    <input v-model="listItem.title" placeholder="title" />
    <button @click="addRow">Add+</button>

    <table>
      <tr>
        <th>check</th>
        <th>id</th>
        <th>name</th>
        <th>title</th>
        <th>delete</th>
      </tr>
      <!--筆記:唯一的id，並將它作為特殊的keyattribute綁定到每個<tr>。key使得Vue 能夠精確的移動每個<tr>，以匹配對應的物件在陣列中的位置。-->
      <tr v-for="item in filteredTodos" :key="item.id" :class="{ done: item.done }">
        <td><input type="checkbox" v-model="item.done" /></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.title }}</td>
        <td><button @click="deleteRow(item)">X</button></td>
      </tr>
    </table>

    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    <ul>
      <li v-for="(item, key) in list" :key="item.id">{{ item }} {{ key }}</li>
    </ul>
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
.done {
  background-color: red;
}
</style>
