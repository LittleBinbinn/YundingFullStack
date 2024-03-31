<!-- 
<template>
  <div class="app">
    <h2>总价：{{ "￥" + TotalPrice }} 当前选中书籍: {{ bookname }} </h2>
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
      <tbody>
        <tr v-for="(item, index) in bookList" :key="item.id" >
          <td>{{ index + 1 }}</td>
          <td>{{ item.bookName }}</td>
          <td>￥{{ item.price }}</td>
          <td>
            <button :disabled="item.num <= 0" @click="decrement(index)">-</button>
            {{ item.num }}
            <button @click="increment(index)">+</button>
          </td>
          <td><button @click="remove(index)">移除</button></td>
        </tr>


        <book-list :bookList="bookList" @add="increment" @decrease="decrement" @del="remove" >
        </book-list>
        <tr v-if=" isShow = false ">
          <td>{{ bookList.length + 1 }}</td>
          <td> <input type="text" v-model="inputName"></td>
          <td> <input type="number" v-model="inputPrice"></td>
          <td><button @click="de_num" :disabled="buyNum <= 0">-</button>
            {{ buyNum }}
            <button @click="in_num">+</button>
          </td>
          <td> <button>移除</button></td>
        </tr>
      </tbody>
    </table>
    <br>

    <button @click="addiction" :class="{ showit: addisShow === 1 }">添加</button>
    <div :class="{ showit: isShow === false }">
      <button @click="confirm">确认</button>
      <button @click="cancel">取消</button>
    </div>
  </div>
</template>

<script>
import bookList from './components/booklist.vue'
export default {
  components: {
    bookList
  },
  data() {
    return {
      bookList: [
        {
          bookName: "《你不知道的JavaScript(上)》",
          price: 120,
          num: 1,
        },
        {
          bookName: "《你不知道的JavaScript(中)》",
          price: 30,
          num: 1,
        },
        {
          bookName: "《你不知道的JavaScript(下)》",
          price: 70,
          num: 1,
        },
        {
          bookName: "《JAVA》",
          price: 100,
          num: 1,
        },
      ],
      bookname: '',
      isShow: false,
      buyNum: 1,
      addisShow: 0,
      inputName: '',
      inputPrice: 0
    }
  },
  computed: {
    TotalPrice() {
      let Price = 0;
      for (const item of this.bookList) {
        Price += item.price * item.num;
      }
      return Price;
    }
  },
  methods: {
    decrement(index) {
      this.bookList[index].num--;
    },
    increment(index) {
      this.bookList[index].num++;
    },
    remove(index) {
      this.bookList.splice(index, 1);
    },
    trclick(index) {
      if (index >= 0 && index < this.bookList.length) {
        this.bookname = this.bookList[index].bookName;
      }
      else {
        this.bookname = '';
      }
    },
    addiction() {
      this.isShow = true;
      this.addisShow = 1;
    },
    cancel() {
      this.isShow = false;
      this.addisShow = 0;
    },
    in_num() {
      this.buyNum++;
    },
    de_num() {
      this.buyNum--;
    },
    confirm() {
      if (this.inputName == '') {
        alert("书名不能为空");
        return;
      }
      if (this.inputPrice <= 0) {
        alert("价格必须为正数");
        return;
      }
      this.bookList.push({
        bookName: '《' + this.inputName + '》',
        price: this.inputPrice,
        num: this.buyNum
      })
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
  text-align: center;
}

th,
td {
  border: solid 1px #aaa;
  padding: 8px 16px;
}

thead {
  background-color: #f5f5f5;
}

.showit {
  display: none;
}

tr:active {
  background-color: orange;
}
</style> -->
<template>
  <h2>总价:￥{{ totalPrice }} 当前选中的书籍是:
    <span v-if="inOnclick >= 0">{{ book[inOnclick].bookName }}</span>
  </h2>
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

    <tbody>
      <tr v-for="(item, index) in book" :class="{ onclick: index === inOnclick }">
        <demo :book="book" :index="index" @chclick="chclick"></demo>
      </tr>
      <tr v-if="nosee == false">
        <td>{{ book.length + 1 }}</td>
        <td><input type="text" v-model="addName"></td>
        <td><input type="number" v-model="addPrice"></td>
        <td><button>-</button>0<button>+</button></td>
        <td><button>移除</button></td>
      </tr>
    </tbody>
  </table>

  <div v-if="nosee==false">
    <button @click="confirm()">确定</button>
    <button @click="cancel()">取消</button>
  </div>
  <button v-else @click="add()">添加</button>
</template>


<script>
import demo from './components/demo.vue'
export default {
  components: {
    demo,
  },
  data() {
    return {
      book: [
        {
          bookName: "《你不知道的JavaScript(上)》",
          price: 120,
          num: 0,
        },
        {
          bookName: "《你不知道的JavaScript(中)》",
          price: 30,
          num: 0,
        },
        {
          bookName: "《你不知道的JavaScript(下)》",
          price: 70,
          num: 0,
        },
        {
          bookName: "《JAVA》",
          price: 100,
          num: 0,
        },
      ], 
      inOnclick: -1,
      nosee: true,
      addName: "",
      addPrice: 0,
    }
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.book.length; i++) {
        totalPrice += this.book[i].price * this.book[i].num;
      }
      return totalPrice
    },
  },

  methods: {

    chclick(index) {
      this.inOnclick = index
    },

    addOnclick() {
      this.nosee = false;
    },

    confirm() {
      if (this.newPrice > 0) {
        this.book.push({ bookName: this.addName, price: this.addPrice, num: 0 })
        this.nosee = true
      } else if(this.addName == ""){
        alert("书名不能为空")
      } else {
        alert("价格应该为正数")
      }
    },

    cancel() {
      this.nosee = true
    },

    add() {
      this.nosee = false
    }
  }
}
</script>


<style>
table {
  text-align: center;
  border-style: solid;
  border-collapse: collapse;
}

td {
  height: 28px;
  padding-left: 20px;
  padding-right: 20px;
  border-style: solid;
}

thead {
  background-color: #aaa;
  width: 30px;
  height: 44px;
}

.onclick {
  background-color: rgb(203, 137, 93);
}

</style>