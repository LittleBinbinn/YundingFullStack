<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ book.name }}</td>
    <td>{{ book.price }}</td>
    <td>
      <button @click="decreaseQuantity">-</button>
      {{ book.quantity }}
      <button @click="increaseQuantity">+</button>
    </td>
    <td>
      <button @click="removeBook">移除</button>
    </td>
  </tr>
</template>

<script>
export default {
  //name:'school',
  props: {
    index: {
      type: Number,
      required: true
    },
    book: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {  
    return {  
      localBook: { ...this.book } // 创建 book prop 的副本  
    };  
  },  
  watch: {  
    // 监听 prop 的变化，更新 localBook  
    book: {  
      handler(newVal) {  
        this.localBook = { ...newVal };  
      },  
      deep: true // 因为 book 是一个对象，深度监听  
    }  
  },
  /* eslint-disable */
  methods: {
    decreaseQuantity() {
      if (this.book.quantity > 0) {
        this.book.quantity--;
        this.$emit('update:quantity', this.book.quantity);
      }
    },
    increaseQuantity() {
      this.book.quantity++;
      this.$emit('update:quantity', this.book.quantity);
    },
    removeBook() {
      this.$emit('remove', this.book);
    }
  }
};  
</script>