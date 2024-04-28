<template>
  <div>
    <div class="titles">
      <strong>总价: ￥ {{ bookSum }} 当前选中书籍：{{ book }}</strong>
    </div>
    <table border="1px" cellspacing="0" class="table">
      <tr background-color="red">
        <th width="50px">序号</th>
        <th width="250px">书名</th>
        <th width="170px">价格</th>
        <th width="110px">购买数量</th>
        <th width="80px">操作</th>
      </tr>
      <helloWorld :bookList='listdate' @add="increase" @sub="decrease" @clear="clearrow" @chose="choose">
      </helloWorld>
      <tr v-if="show">
        <td>{{ this.listdate.length+1 }}</td>
        <td><input v-model="newBookName" ></td>
        <td><input v-model="newBookPrice"></td>
        <td>
          <button>-</button>
          1
          <button>+</button>
        </td>
        <td>
          <button>移除</button>
        </td>
      </tr>
    </table>
    <div class="head">
      <button @click="addBook" v-if="thing">添加</button>
      <button @click="sure" v-if="thing1">确认</button>
      <button @click="bye" v-if="thing1">取消</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

var id=1
export default {
  components: {
    'helloWorld': HelloWorld,
  },
  data() {
    return {
      book:'',
      thing: true,
      thing1: false,
      listdate: [
        { id: id++, name: '哈利波特', price: 60, number: 1 }
      ],
      newBookName: '',
      newBookPrice: '',
      show:false
    }
  },
  computed: {
    bookSum() {
      let price = 0 ;
      for (const item of this.listdate) {
        price += item.number*item.price
      }
      return price
    }
  },
  methods: {
    sure() {
      if (this.newBookName!=='' && this.newBookPrice!==''&& isNaN(this.newBookPrice)=== false) {
        var bookList ={
          id: this.listdate.length + 1 ,
          name: this.newBookName,
          price: this.newBookPrice,
          number: 1
        }
        this.listdate.push(bookList)
        this.thing = !this.thing
        this.thing1 = !this.thing1
        this.show = !this.show
        this.newBookName = ''
        this.newBookPrice=''
      } else {
        alert('请正确输入')
      }
    },
    bye() {
      this.thing = !this.thing
      this.thing1 = !this.thing1
      this.show = !this.show
    },
    addBook() {
      this.thing = !this.thing
      this.thing1 = !this.thing1
      this.show = !this.show
    },
    choose(count) {
      var poss = 0;
      var read = document.querySelectorAll("tr")
      for (const num of read) {
        poss++
        if (poss === count + 1) {
          num.style.backgroundColor = 'antiquewhite'
        }
        if (poss !== count + 1) {
          num.style.backgroundColor = ''
        }
      }
      this.book = this.listdate[count - 1].name
    },
    increase(count) {
      this.listdate[count - 1].number++;
    },
    decrease(count) {
      this.listdate[count-1].number--;
    },
    clearrow(count) {
      this.listdate.splice(count - 1, 1),
      id--
      for (const items of this.listdate) {
        if (items.id >= count) {
          items.id--
        }
      }
    }
  }
}
</script>

<style>
.table {
  text-align: center;
}
th {
  background-color: wheat;
}
.titles {
  margin-bottom: 5px;
  font-size: 20px;
}
.head {
  margin-top: 5px;
}
</style>
