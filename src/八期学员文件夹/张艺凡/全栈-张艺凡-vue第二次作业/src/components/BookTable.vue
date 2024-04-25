<template>
  <div>
    <table border>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="book.id" @click="highlightRow(index)" :class="highlightedIndex === index ? 'highlighted' : ''">
          <td>{{ index + 1 }}</td>
          <td class="book-name"  v-if="book.isAdd">
            <input type="text" v-model="bookName">
          </td>
          <td class="book-name" v-else>《{{ book.name }}》</td>
          <td v-if="book.isAdd" class="book-price">
            <input type="text" v-model="bookPrice" style="width: 50px;"></td>
          <td class="book-price" v-else>¥ {{ book.price }}</td>
          <td>
            <button @click.stop="handleDecrease(index)">-</button>
            {{ book.quantity }}
            <button @click.stop="handleIncrease(index)">+</button>
          </td>
          <td><button :disabled="book.isAdd" @click.stop="removeBook(index)">移除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    },
    addIndex: {
      type: Number,
      required: true
    },
    highlightedIndex: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
    };
  },
  computed: {
    bookName: {
      get() {
        return this.books[this.addIndex].name;
      },
      set(value) {
        this.$emit('updateBookName', value);
      }
    },
    bookPrice: {
      get() {
        return this.books[this.addIndex].price;
      },
      set(value) {
        this.$emit('updateBookPrice', value);
      }
    }
  },
  methods: {
    handleDecrease(index) {
      this.$emit('decreaseQuantity', index);
    },
    handleIncrease(index) {
      this.$emit('increaseQuantity', index);
    },
    removeBook(index) {
      this.$emit('removeBook', index);
    },
    highlightRow(index) {
      if (this.books[index].isAdd) {
        return;
      }
      this.$emit('updateHighlighted', index);
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse; /* 移除表格之间的间距 */
}

table, th, td {
  border: 1px solid black; /* 设置边框为1px实线和黑色 */
  padding: 10px;
}
.highlighted {
  background-color: yellow;
}
.book-name {
  width: 200px;
  text-align: center;
}
.book-price {
  width: 100px;
  text-align: center;
}
</style>
