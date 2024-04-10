<script>
import info from './components/info.vue'
export default {
  components: {
    info,
  },
  data() {
    return {
      book: [{ bookName: "剑来", price: 14, num: 0 }, { bookName: "蛊真人", price: 12, num: 0 }, { bookName: "道诡异仙", price: 11, num: 0 }],
      indexOnclick: -1,
      unvisable: true,
      newName: "",
      newPrice: 0,
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
    tdclick(index) {
      this.indexOnclick = index
    },
    addOnclick() {
      this.unvisable = false;
      this.isaddviable = true
    },
    confirm() {
      if (this.newPrice > 0) {
        this.book.push({ bookName: this.newName, price: this.newPrice, num: 0 })
        this.unvisable = true
      } else {
        alert("价格应当是正数")
      }
    },
    cancel() {
      this.unvisable = true
    },
    add() {
      this.unvisable = false
    }
  }
}
</script>

<template>
  <h2>总价:{{ totalPrice }}￥ 当前选中的书籍是:
    <span v-if="indexOnclick >= 0">{{ book[indexOnclick].bookName }}</span>
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
      <tr v-for="(item, index) in book" :class="{ onclick: index === indexOnclick }">
        <info :book="book" :index="index" @tdclick="tdclick"></info>
      </tr>
      <tr :class="{ unvisable: unvisable }">
        <td>{{ book.length + 1 }}</td>
        <td><input type="text" v-model="newName"></td>
        <td><input type="number" v-model="newPrice"></td>
        <td><button>-</button>0<button>+</button></td>
        <td><button>移除</button></td>
      </tr>
    </tbody>
  </table>
  <button :class="{ unvisable: unvisable }" @click="confirm()">确定</button>
  <button :class="{ unvisable: unvisable }" @click="cancel()">取消</button>
  <button :class="{ unvisable: !unvisable }" @click="add()">添加</button>
</template>

<style>
table {
  text-align: center;
  border-style: solid;
  border-collapse: collapse;
}

td {
  padding-left: 20px;
  padding-right: 20px;
  border-style: solid;
}

thead {
  background-color: rgb(7, 110, 150);
}

.onclick {
  background-color: rgb(155, 205, 255);
}

.unvisable {
  display: none;
}
</style>
