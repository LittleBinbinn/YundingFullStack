<template>
  <div>
    <ul>
      <KeepAlive include="OptionView">
        <RouterLink :to="`/home/option?name=${item.name}`" v-for="item in list" :key="item.id">{{ item.name }}
        </RouterLink>
      </KeepAlive>
    </ul>
    <input type="text" v-model="addValue">&nbsp;
    <button @click="add">确定</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

let addValue = ref('')

let list = reactive([
  { id: 1, name: 'son' },
  { id: 2, name: 'tom' },
])

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