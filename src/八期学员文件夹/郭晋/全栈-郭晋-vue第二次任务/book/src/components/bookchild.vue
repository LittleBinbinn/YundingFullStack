<template>
    <tr>
      <td>{{ book.id }}</td>
      <td>{{ book.name }}</td>
      <td>{{ book.price }}</td>
      <td>
        <button @click="incrementQuantity">+</button>
        {{ book.num }}
        <button @click="decrementQuantity">-</button>
      </td>
      <td><button @click="removeBook">移除</button></td> <!-- 改为移除按钮 -->
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      book: Object
    },
    methods: {
      incrementQuantity() {
        this.$emit('increment', this.book.id);
      },
      decrementQuantity() {
        this.$emit('decrement', this.book.id);
      },
      removeBook() { // 添加移除书籍的方法
        this.$emit('remove', this.book.id);
      }
    }
  };
  </script>
  
  