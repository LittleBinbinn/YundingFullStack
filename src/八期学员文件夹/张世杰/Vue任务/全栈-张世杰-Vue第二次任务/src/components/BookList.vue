<template>  
  <div>  
    <p>总价：￥{{ totalPrice }}</p>  
    <table border="1">  
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
        <BookItem  
          v-for="(book, index) in books"  
          :key="book.name"  
          :index="index + 1"  
          :book="book"  
          :selected="selectedBook === book"  
          @remove="removeBook"  
          @update:book="updateBook"  
        />  
        <!-- 动态显示添加书籍的表单 -->  
        <tr v-if="showAddBookForm" class="add-book-form">  
          <td></td>  
          <td>  
            <input type="text" v-model="newBook.name" placeholder="书名" required>  
          </td>  
          <td>  
            <input type="number" v-model.number="newBook.price" placeholder="价格" required>  
          </td>  
          <td>  
            <input type="number" v-model.number="newBook.quantity" placeholder="数量" required>  
          </td>  
          <td>  
            <button @click="addBookFromForm">添加</button>  
          </td>  
        </tr>  
      </tbody> 
    </table>
      <button @click="showAddBookFormMethod">添加</button>
  </div>  
</template>  
  
<script>  
import BookItem from "./BookItem.vue";  
  
export default {  
  components: {  
    BookItem,  
  },  
  data() {  
    return {  
      books: [
        { name: "Vue ", price: 50, quantity: 2 },
        { name: "JavaScript", price: 35, quantity: 1 },
        //默认书籍
      ],  
      selectedBook: null,  
      showAddBookForm: false, // 控制添加书籍表单的显示与隐藏  
      newBook: { // 用于临时存储新书籍的信息  
        name: '',  
        price: 0,  
        quantity: 0  
      }  
    };  
  },  
  computed: {  
    totalPrice() {  
      return this.books.reduce(  
        (total, book) => total + book.price * book.quantity,  
        0  
      );  
    },  
  },  
  methods: {  
    removeBook(book) {  
      const index = this.books.findIndex(b => b.name === book.name);  
      if (index !== -1) {  
        this.books.splice(index, 1);  
      }  
    },  
    updateBook(updatedBook) {  
      const index = this.books.findIndex(b => b.name === updatedBook.name);  
      if (index !== -1) {  
        this.$set(this.books, index, updatedBook);  
      }  
    },  
    addBookFromForm() {  
      // 验证表单  
      if (!this.newBook.name || !this.newBook.price) {  
        alert('请填写完整的书籍信息！书名不能为空，价格为正数。');  
        return;  
      }  
        
      // 将新书籍添加到书籍列表中  
      this.books.push({  
        name: this.newBook.name,  
        price: this.newBook.price,  
        quantity: this.newBook.quantity  
      });  
        
      // 清空表单  
      this.newBook = {  
        name: '',  
        price: 0,  
        quantity: 0  
      };  
        
      // 隐藏添加书籍的表单  
      this.showAddBookForm = false;  
    },  
    showAddBookFormMethod() {  
      // 显示添加书籍的表单  
      this.showAddBookForm = true;  
    }  
  }  
};  
</script>  
  
<style scoped>
.add-book-form input {  
  width: 100%;  
}  
</style>