<template>
  <BookList
  :price="AllMoney"
  :BookList="bookList"
  :del="Delete"
  ></BookList>
</template>

<script setup>
import { computed, reactive } from 'vue'
import BookList from './components/BookList.vue'

let bookList = reactive([
  { 
          id:1,
          bookName: "《你不知道的JavaScript上》",
          price: "50",
          num: 1,
        },
  {
          id:2,
          bookName: "《你不知道的JavaScript中》",
          price: "60",
          num: 1,
        },
  {
          id:3,
          bookName: "《你不知道的JavaScript下》",
          price: "70",
          num: 1,
        },
  {
          id:4,
          bookName: "《JAVA》",
          price: "100",
          num: 1,
        },
])

function Delete(id) {
  const index = bookList.findIndex(book => book.id === id)
  bookList.splice(index, 1)
  console.log(bookList)
}

const AllMoney = computed(() => {
  let money = 0;
  for (const book of bookList) {
    money += book.num * book.price
  }
  return money
})
</script>

<style>

</style>