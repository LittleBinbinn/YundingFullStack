<template>
  <div>
    <h2>About</h2>
    <ul>
        <RouterLink :to='`/about/List?user=${items.name}`' v-for="items in list" :key="items.id">{{ items.name }}
        </RouterLink>
    </ul>
    <input type="text" v-model="addValue">&nbsp;
    <button @click="add">确定</button>
      <RouterView></RouterView>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let addValue = ref('')
let list = [
  { id: 1, name: 'son' },
  { id: 2, name: 'tom' }
]

function add() {
  let obj = {
    id: list.length + 1,
    name: addValue.value
  }
  list.push(obj)
  addValue.value = ''
}
</script>

<style>

</style>
