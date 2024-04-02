<template>
  <div>
    <template v-if="books.length">
      <h2>总价:￥{{ all }}</h2>
      <h3>当前选中的书籍：{{ bookk }}</h3>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>书籍</th>
            <th>单价</th>
            <th>数量</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in books"
            :key="item.id"
            :class="{ active: index === currentIndex }"
            @click="onn(index), trClick(index)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.book }}</td>
            <td>￥{{ item.price }}</td>
            <td>
              <button @click="low(index)" :disabled="item.count == 0">-</button>
              {{ item.count }} <button @click="high(index)">+</button>
            </td>
            <td><button @click="go(index)">移除</button></td>
          </tr>
        </tbody>
      </table>
    </template>
    <div v-else>什么都没有</div>
    <div class="new">
      <form v-if="showTable">
        <label for="bookTitle">书名：</label>
        <input type="text" id="bookTitle" v-model="newBook.book" required />
        <label for="bookPrice">价格：</label>
        <input type="number" id="bookPrice" v-model="newBook.price" required />
        <button @click="ok">确认</button>
        <button @click="no">取消</button>
      </form>
    </div>
    <button @click="showTable = true" v-if="!showTable">添加</button>
    <div style="color: red">当移除最后一个时会出现报错弹框，关掉后仍能显示</div>
  </div>
</template>
<script>
export default {
  props: {
    books: {
      type: Array,
      //default: () => []
      default() {},
    },
  },
  data() {
    return {
      currentIndex: -1,
      bookk: "",
      showTable: false,
      newBook: {
        book: "",
        price: "",
        count: 1,
      },
    };
  },
  computed: {
    all() {
      let i = 0;
      let AllPrice = 0;
      for (const item of this.books) {
        AllPrice += item.price * item.count;
        //console.log(AllPrice)
      }
      return AllPrice;
    },
  },
  methods: {
    low(index) {
      // console.log(this.books[index])
      this.books[index].count--;
    },
    high(index) {
      this.books[index].count++;
      // this.okk = this.books[index].book;
      // console.log(okk)
    },
    go(index) {
      // console.log(books[index])
      this.books.splice(index, 1);
    },
    onn(index) {
      this.bookk = this.books[index].book;
    },
    trClick(index) {
      console.log(index);
      this.currentIndex = index;
    },
    ok() {
      if (this.newBook.book && this.newBook.price) {
        const newBook = {
          id: this.books.length + 1,
          book: this.newBook.book,
          price: this.newBook.price,
          count: 1,
        };
        this.books.push(newBook);
        this.clear();
      } else {
        alert("填写书名和价格");
      }
    },
    no() {
      this.clear();
    },
    clear() {
      this.newBook.book = "";
      this.newBook.price = "";
      this.showTable = false;
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  text-align: center;
}

thead {
  background-color: #f5f5f5;
}

th,
td {
  border: 1px solid #000;
  padding: 8px 16px;
}

.active {
  background: #f3e0e0bb;
}
</style>