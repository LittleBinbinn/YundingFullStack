<template>
  <div class="app">
    <div class="BookTable">
      <div class="nav">
        <h4>总价：￥{{ totalPrice }} 当前选中的书籍：{{ titleClick(selectedBookIndex) }}</h4>
      </div>
      <div class="table">
        <table>
          <!-- 上栏标题显示 -->
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
            <!-- 书籍显示 -->
            <!-- //把book对象直接赋值给名叫book -->
            <book-list v-for="(book, index) in bookSum" :key="book.id" :book="book" :index="index"
              :isSelected="selectedBookIndex === index" @increment="addBtnClick" @decrement="decreBtnclick"
              @deleteRow="deleteRow" @selectRow="selectRow" @titleclick="titleclick"></book-list>
          </tbody>
        </table>
        <div class="addBook">
          <form @submit.prevent v-if="showForm">
            <!-- //是否显示表格 -->
            <label for="bookTitle">书名:</label>
            <input type="text" id="bookTitle" v-model="newBook.title" required>

            <label for="bookPrice">价格:</label>
            <input type="number" id="bookPrice" v-model="newBook.price" @input='judegNumber' required>
            <!--@input='judegNumber'函数判断input里面的数字是否正数 -->
            <button @click="confirmAddBook">确认</button>
            <!-- //连接确认的函数 -->
            <button @click="cancelAddBook">取消</button>
            <!-- //实现表单消失的函数 -->
          </form>
        </div>
      </div>
      <div><button @click="showForm = true" v-if="!showForm">添加</button> </div>
      <!-- //其showForm的值跟form里的showForm值相反-->
    </div>
  </div>
</template>
<script>
import BookList from './components/BookList.vue'
export default {
  components: {
    BookList
  },
  data() {
    return {
      showForm: false,
      selectedBookIndex: null,
      bookSum: [
        {
          id: 1,
          title: '《javaScript高级程序设计》',
          price: 126,
          count: 1
        },
        {
          id: 2,
          title: '《你不知道的JS（上卷）》',
          price: 78,
          count: 1
        },
        {
          id: 3,
          title: '《你不知道的JS（中卷）》',
          price: 76,
          count: 1
        },
        {
          id: 4,
          title: '《你不知道的JS（下卷）》',
          price: 64,
          count: 1
        },
        {
          id: 5,
          title: '《大奉打更人》',
          price: 9.9,
          count: 1
        }
      ],
      //把newBook push到数组中
      newBook: { // 新增的表单数据对象  
        title: '',
        price: 0,
        count: 1
      }
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      for (const item of this.bookSum) {
        price += item.price * item.count
      }
      return price
    }
  },
  methods: {
    addBtnClick(Newcount, bookIndex) {
      this.bookSum[bookIndex].count += Newcount
    },
    decreBtnclick(Newcount, bookIndex) {
      this.bookSum[bookIndex].count -= Newcount
    },
    deleteRow(index) {
      this.bookSum.splice(index, 1)
    },
    // 使选中的行颜色改变的函数
    selectRow(index) {
      this.selectedBookIndex = index;
    },
    confirmAddBook() {
      if (this.newBook.title && this.newBook.price) {
        const newBook = {
          id: this.bookSum.length + 1,
          title: this.newBook.title,
          price: this.newBook.price,
          count: 0
        };
        this.bookSum.push(newBook);
        this.clearForm();
      } else {
        alert('请填写书名和价格！');
      }
    },

    cancelAddBook() {
      this.clearForm();
    },

    clearForm() {
      this.newBook.title = '';
      this.newBook.price = 0;
      this.showForm = false;
    },
    titleClick(index) {
      if (this.bookSum[index]) {
        return this.bookSum[index].title;
      }
      return '无选中书籍';
      // 当索引无效时返回的默认值
    },
    judegNumber() {
      if (this.newBook.price <= 0) {
        alert('请输入正数');
        this.newBook.price = ''
      }
    }

  }
}
</script>
<style scoped>
th,
td {
  border: 1px solid #aaa;
  padding: 8px 16px;
}

thead {
  background-color: #f5f5f5;
}
</style>