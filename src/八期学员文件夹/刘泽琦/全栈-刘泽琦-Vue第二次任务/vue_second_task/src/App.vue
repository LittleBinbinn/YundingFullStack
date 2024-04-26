<template>
  <div id="app">
    <h2> &nbsp; 总价:￥ {{ totalPrice }} &nbsp;当前选中书籍：{{ book }}</h2>
    <div class="form">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>书名</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <!-- 四条书籍信息 -->
          <BookList :datas="datas" @bookSelect="bookSelected" @newCount="newCount" @removeBook="removeBook"></BookList>

      </table>
    </div>
    <div class="add-book">
      <form @submit.prevent="addBook">
        <input type="text" v-model="newBookName" placeholder="书名" />
        <input type="number" v-model="newBookPrice" placeholder="价格" />
        <button type="submit" @click="addbook">添加</button>
      </form>
    </div>
  </div>
</template>

<script>
  import BookList from './components/BookList.vue'

  export default {
    components: {
      BookList,
    },
    data() {
      return {
        book: '',
        count: 1,
        newBookName: '',
        newBookPrice: 0,
        datas: [
                {
                  id: '1',
                  name: '《JavaScript高级程序设计》',
                  price: 126,
                  count: 0
                },
                {
                  id: '2',
                  name: '《你不知道的 JS (上卷) 》',
                  price: 78,
                  count: 0
                },
                {
                  id: '3',
                  name: '《你不知道的 JS (中卷) 》',
                  price: 76,
                  count: 0
                },
                {
                  id: '4',
                  name: '《你不知道的 JS (下卷) 》',
                  price: 64,
                  count: 0
                }
              ]
            }
      },
    methods: {
      bookSelected(index, name) {
        this.book = name
      },
      newCount(index,count) {
        this.$set(this.datas[index], 'count', count);
      },
      removeBook(index) {
        this.datas.splice(index, 1);
      },
      addBook() {
        if (this.newBookName && this.newBookPrice > 0) {
          const newBook = {
            id: this.datas.length + 1, 
            name: this.newBookName,
            price: this.newBookPrice,
            count: 0,
          };
          this.datas.push(newBook);
          this.newBookName = '';
          this.newBookPrice = 0;
          this.show = false;
        } else {
          alert('请填写书名和价格，且价格应当是正数！');
        }
      },  
    },
    computed: {
      totalPrice() {
        let price = 0
        for(const item of this.datas) {
          price += item.price * item.count
        }
        return price
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  table {
    border-collapse: collapse;
    text-align: center;
    margin-top: 6px;
  }

  th {
    border: 1px solid #aaa;
    padding: 8px 16px;
  }

  thead {
    background-color: #f5f5f5;
  }

  .active {
    background-color: orange;
  }
</style>