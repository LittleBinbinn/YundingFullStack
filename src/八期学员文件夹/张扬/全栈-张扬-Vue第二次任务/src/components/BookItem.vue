<template>
  <tr>
    <td>{{ book.id }}</td>
    <td @click="$emit('ShowBook',book.bookName)">{{ book.bookName }}</td>
    <td>{{ book.price }}</td>
    <td @click="$emit('allMoney',book.num,book.price)"><button :class="book.num == 1 ? 'is-disabled' : ''" @click="subNumber">-</button>{{ book.num
      }}<button @click="addNumber">+</button></td>
    <td><button @click="handleDelete(book.id)">移除</button></td>
  </tr>
</template>

<script setup>
import { defineProps, ref} from 'vue';
import { defineEmits } from 'vue';


let props = defineProps(['book','delete'])
let book = props.book
let emits = defineEmits(['ShowBook', 'allMoney'])

function subNumber() {
  if (book.num === 1) {
    return
  } else {
    book.num -= 1
  }
}

function addNumber() {
  book.num += 1
}

function handleDelete(id) {
  props.delete(id)
}
</script>

<style>
.is-disabled {
  cursor: not-allowed;
}
</style>