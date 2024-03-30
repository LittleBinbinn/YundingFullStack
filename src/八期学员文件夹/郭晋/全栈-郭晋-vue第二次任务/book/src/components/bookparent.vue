<template>
    <div>
      <h2>书籍列表</h2>
      <h2>总价: ￥{{ Price() }} 当前选中的书籍: {{   selectbook() }}</h2>
      <table >
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
          <bookchild v-for="(book, index) in books" :key="book.id" :book="book" :index="index" @increment="numAdd" @decrement="numDet" @remove="removeBook" :class="{ 'selected': selectedRow === index }" @click="selectRow(index)"/>
          <tr v-if="showAddForm">
            <td>{{ newBookID }}</td> 
            <td><input type="text" v-model="newBookName" placeholder="请输入书名"></td>
            <td><input type="number" v-model="newBookPrice" placeholder="请输入价格"></td>
            <td><input type="number" v-model="newBookQuantity" placeholder="购买数量"></td>
            <td>
              <button @click="addNewBook">确认添加</button>
              <button @click="cancelAdd">取消</button>
            </td>
          </tr>
          <tr v-else>
            <td >
              <button @click="showAddForm = true">添加</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import bookchild from './bookchild.vue';
  
  export default {
    components: {
      bookchild
    },
    data() {
      return {
        totalPrice: 0,
        books: [
          { id: 1, name: "JavaScript高级程序设计", price: 126, num: 0 },
          { id: 2, name: "你不知道的js(上卷)", price: 78, num: 0 },
          { id: 3, name: "你不知道的js(中卷)", price: 76, num: 0 },
          { id: 4, name: "你不知道的js(下卷)", price: 64, num: 0 }
        ],
        selectedRow: null,
        newBookName: '', // 新书籍的书名
        newBookPrice: null, // 新书籍的价格
        newBookQuantity: 1, // 新书籍的购买数量，默认为1
        showAddForm: false // 控制是否显示添加书籍的表单
      };
    },
    methods: {
      numAdd(bookId) {
        const book = this.books.find(b => b.id === bookId);
        book.num++;
        this.Price();
      },
      numDet(bookId) {
        const book = this.books.find(b => b.id === bookId);
          book.num--;
          this.Price();
      },
      removeBook(bookId) {
        this.books = this.books.filter(b => b.id !== bookId);
        this.Price();
      },
      addNewBook() {
        if (this.newBookName && this.newBookPrice>=0) {
          const newBookId = this.books.length + 1;
          const newBook = { id: newBookId, name: this.newBookName, price: parseFloat(this.newBookPrice), num: parseInt(this.newBookQuantity) };
          this.books.push(newBook);
          this.newBookName = ''; 
          this.newBookPrice = null; 
          this.newBookQuantity = 1; 
          this.showAddForm = false; 
          this.Price();
        } else {
          alert('请填写完整的书名和价格');
        }
      },
      cancelAdd() {
        this.newBookName = ''; 
        this.newBookPrice = null; 
        this.newBookQuantity = 0; 
        this.showAddForm = false; 
      },
    Price() {
      let totalPrice = 0;
       for (let i = 0; i < this.books.length; i++) {
             totalPrice += this.books[i].price * this.books[i].num;
  }
  return totalPrice
      },
      selectRow(index) {
      this.selectedRow = index;
    },
    selectbook(){
      if (this.selectedRow !== null && this.selectedRow >= 0 && this.selectedRow < this.books.length) {
      return this.books[this.selectedRow].name;
    } else {
      return '无';
    }}}}
    

    
  
  </script>
  <style>
table, th, td
{
    border: 1px solid black;
}
.selected {
  background-color: coral;
}
</style>
  