// Book.vue
<template>
    <tr @click="selectBook" :class="{ 'selected': book.s }">
    <td>{{ book.id }}</td>
    <td>《{{ book.name }}》</td>
    <td>{{ book.date }}</td>
    <td>￥{{ book.price }}</td>
    <td>
        <button v-bind:disabled="book.count <=1" @click="increment()">-</button>
        {{ book.count }}
        <button @click="decrement()">+</button>
    </td>
    <td>
      <button @click="deleteBook">移除</button>
    </td>

  </tr>
</template>

<script>
export default {
    props: {
    book: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    s: {
        type:Boolean,
        required: true
    }
  },
  
  methods: {
    decrement() {
        this.book.count++
    },
    increment() {
        this.book.count--
    },
    selectBook() {
      // 触发书籍选中事件
      this.$emit('book-selected', this.book.id, this.index);
    },
    deleteBook() {
      // 触发删除书籍事件
      this.$emit('book-deleted', this.index);
    },
  } 
}
</script>

<style scoped>
    td {
        height: 25px;
        width: 100px;
        border: 1px solid #aaa;
        text-align: center;
    }

</style>
