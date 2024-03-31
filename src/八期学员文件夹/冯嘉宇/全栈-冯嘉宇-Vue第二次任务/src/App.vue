<template>
  <p>总价：￥{{ totalPrice }} 当前选中书籍：{{ currentBook }}</p>
  <table>
    <thead>
      <tr>
        <td>序号</td>
        <td>书名</td>
        <td>价格</td>
        <td>购买数量</td>
        <td>操作</td>
      </tr>
    </thead>
    <booksTable :books="books" :change="change" :newName="newName" :newPrice="newPrice" :currentBook="currentBook"
      @custom-event="handle" :number="number" @ensure1="ensure1" @ensure2="ensure2" @deleteBooks="deleteBooks" >
    </booksTable>
  </table>
  <div v-if="change === true" class="addBook">
    <button @click="ok">确定</button>
    <button @click="no">取消</button>
  </div>
  <button v-else class="addBook" @click="addBook">添加</button>
</template>
<script>
  import booksTable from '../src/components/books.vue'
export default {
    components: {
      booksTable
    },
    data() {
      return {
        books: [
          {
            name: "《JavaScript高级程序设计》",
            price: 126,
            count: 0
          },
          {
            name: "《你不知道的JS（上卷）》",
            price: 78,
            count: 0
          },
          {
            name: "《你不知道的JS（中卷）》",
            price: 76,
            count: 0
          },
          {
            name: "《你不知道的JS（下卷）》",
            price: 64,
            count: 0
          }
        ],
        currentBook: "",
        change: false,
        number: 4,
        newName: "",
        newPrice: 0,
        newCount: 0,
      }
    },
    methods: {
    addBook() {
      this.books.push({ name: this.newName, price: this.newPrice, count: this.newCount })
      this.change = true
    },
    ok() {
      this.books[this.books.length - 1].name = "《" + this.newName + "》"
      this.books[this.books.length - 1].price = this.newPrice
      if (this.newName === "") {
        alert("书名不能为空")
      } else if (this.newPrice <= 0) {
        alert("价格应当是正数")
      } else {
        this.change = false
        this.number += 1
      }
      this.newCount = 0
      }, 
    no() {
      this.books.pop()
      this.change = false
    },
    addPrice(book) {
      this.books = book
    },
    handle(newCurrent) {
        this.currentBook = newCurrent
      },
    deleteBooks(newNumbers) {
      this.number = newNumbers
      console.log(newNumbers)
    },
      ensure1(newNames) {
      this.newName = newNames
      console.log(this.newName)
    },
    ensure2(newPrices) {
      this.newPrice = newPrices
    }
  },
    computed: {
      totalPrice() {
        let price = 0;
        for (const item of this.books) {
          price += item.price * item.count;
        }
        return price
      }
    }
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  th,td {
    border: 1px solid black;
    padding: 8px 16px;
  }

  thead {
    background-color: darkgray;
  }

  .addBook {
    margin-top: 15px;
  }
</style>
