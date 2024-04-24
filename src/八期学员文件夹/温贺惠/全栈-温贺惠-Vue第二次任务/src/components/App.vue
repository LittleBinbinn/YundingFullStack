<template>
  <div class="box1">
    <div class="header">
      <span id="all_price">总价：¥{{ all_price }}</span>
      <span id="now_book">当前选中书籍：{{ selectedBook(selectedBookIndex) }}</span>
    </div>
    <div class="table">
      <table cellpadding="0">
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        <number v-for="(book, index) in Books" :key="book.id" :book="book" :index="index"
          :isSelected="selectedBookIndex === index" @increment="addButton" @decrement="decreButton" @deletetr="deletetr" @selecttr="selecttr" @selectedBook="selectedBook">
        </number>
      </table>     
        <table @submit.prevent v-if="Show">
          <tr>
            <td id="one">{{ this.Books.length + 1}}</td>
            <td id="two"><input type="text" id="bookTitle" v-model="newBook.title" required></td>
            <td id="three"><input type="number" id="bookPrice" v-model="newBook.price" @input='judge' required></td>
            <td>
              <button>-</button>
              {{ 0 }}
              <button>+</button>
            </td>
            <td>
              <button @click="confirm">确认</button>
            </td>
          </tr>
        </table>
    </div>
    <button @click="Show=true" v-if="!Show">添加</button> 
  </div>
</template>

<script>
import Number from './Number.vue'

export default {
  components: {
    Number
  },
  data() {
    return {
      Show: false,
      selectedBookIndex: null,
      Books: [
        {
          id: 1,
          title: '《javaScript高级程序设计》',
          price: 126,
          count: 0
        },
        {
          id: 2,
          title: '《你不知道的JS（上卷）》',
          price: 78,
          count: 0
        },
        {
          id: 3,
          title: '《你不知道的JS（中卷）》',
          price: 76,
          count: 0
        },
        {
          id: 4,
          title: '《你不知道的JS（下卷）》',
          price: 64,
          count: 0
        },
      ],
      newBook: {   
        title: '',
        price: 0,
        count: 0
      }
    }
  },
  computed: {
    all_price() {
      let price = 0
      for (const item of this.Books) {
        price += item.price * item.count
      }
      return price
    }
  },
  methods: {
    addButton(Newcount, bookIndex) {
      this.Books[bookIndex].count += Newcount
    },
    decreButton(Newcount, bookIndex) {
      this.Books[bookIndex].count -= Newcount
    },
    deletetr(index) {
      this.Books.splice(index, 1)
    },
    selecttr(index) {
      this.selectedBookIndex = index;
    },
    confirm() {
      if (this.newBook.title && this.newBook.price) {
        const newBook = {
          id: this.Books.length + 1,
          title: "《"+this.newBook.title+"》",
          price: this.newBook.price,
          count: 0
        };
        this.Books.push(newBook);
        this.clear();
      } else {
        alert('不能为空白！');
      }
    },
    clear() {
      this.newBook.title = '';
      this.newBook.price = 0;
      this.Show = false;
    },
    judge() {
      if (this.newBook.price <= 0) {
        alert('请输入正数');
        this.newBook.price = ''
      }
    },
    selectedBook(index) {
      if (this.Books[index]) {
        return this.Books[index].title;
      }
    },
  }
}
</script>

<style scoped>
.box1 {
  position: relative;
  width: 800px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

#all_price {
  font: 600 25px "微软雅黑";
  margin: auto;
}

#now_book {
  font: 800 25px "微软雅黑";
  margin-left: 60px;
}

table {
  border-right: 1px solid palevioletred;
  border-left: 1px solid palevioletred;
  width: 800px;
  text-align: center;
  font-size: 20px; 
  padding: 0;
}

th {
  background-color: palevioletred;
}

tr,td {
  border: 1px solid white;
  border-collapse: collapse;
  height: 30px;
}

tr:hover {
  background: palevioletred;
}

#bookTitle {
  width: 200px;
}

#bookPrice {
  width: 40px;
}

#one {
  width: 65px;
}

#two {
  width: 430px;
}
</style> 