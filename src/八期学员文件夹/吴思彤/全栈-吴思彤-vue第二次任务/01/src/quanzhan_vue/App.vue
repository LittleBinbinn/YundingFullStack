<template>
  <div class="app">
      <h2>总价：￥{{ totalPrice }}</h2>
      <h2>当前选中书籍：{{ onebook }}</h2>
      <table>
         <thead> 
          <TabControl :titles="['序号', '书名', '价格', '购买数量', '操作'] "></TabControl>
        </thead>
        <tbody>
           <TextContext :books="books" @decrement="decrement" @increment="increment"
          @remove="remove" @show="show"></TextContext>
        <tr :class="{ addTr:addStatus ===1 }">
          <td>{{ books.length+1 }}</td>
          <td><input type="text" v-model="inputName"></td>
          <td><input type="number" v-model="inputPrice"></td>
          <td>
               <button @click="adddecrement" :disabled="addcount <= 1">-</button>
                  {{addcount}}
                  <button @click="addincrement">+</button>
          </td>
          <td>
               <button @click="remove(index)">移除</button>
          </td>

        </tr>
        </tbody>

      </table>
       <button class="add" @click="add" :class="{addBtn:addBtnStatus===1}">添加</button>
       <div :class="{confirmOrNot:addBtnStatus===0}">
          <button @click="confirm" class="confirm">确认</button>

          <button @click="cancell" class="cancell">取消</button>
       </div>

  </div>
</template>

<script>
import TabControl from './TabControl.vue';
import TextContext from './TextContext.vue';
export default {
  data() {
      return {
           books: [
             
              {
                  id: 1,
                  name: "《JavaScript高级程序设计》",
                  price: 126,
                  count: 1
              },
              {
                  id: 2,
                  name: "《你不知道的JS(上卷)》",
                  price: 78,
                  count: 1
              },
              {
                  id: 3,
                  name: "《你不知道的JS(中卷)》",
                  price: 76,
                  count: 1
              },
              {
                  id: 4,
                  name: "《你不知道的JS(下卷)》",
                  price: 64,
                  count: 1
              },
          ],
          inputName: "",
          inputPrice: 0,
          addcount: 1,
          addStatus: 1,
          addBtnStatus:0,
          onebook:''
          
      }
  },
  components: {
      TabControl,
      TextContext
  },
  computed: {
      totalPrice() {
          let price = 0
          for (const item of this.books) {
              price +=item.price*item.count
          }
          return price;
      }
  },
  methods: {
    show(index){
      this.onebook = this.books[index].name
    },
      decrement(index) {
         this.books[index].count--
    
      },
      increment(index) {
         this.books[index].count++
      },
      remove(index) {
          this.books.splice(index, 1);
      },
      add() {
          this.addStatus = 0
          this.addBtnStatus=1
      },
      addincrement() { 
          appcount++
      },
      adddecrement() {
          appcount--
      },
      confirm() {
          if (this.inputName == '') {
              alert("书名不能为空")
              return;
          } else  if (this.inputPrice <= 0) {
              alert("价格应当是正数")
              return;
          }
          this.books.push({
              id: this.books.length + 1,
              name:  this.inputName ,
              price: this.inputPrice,
              count:this.addcount
          })
          this.addStatus = 1
          this.addBtnStatus=0
      
      },
      cancell() {
          this.addStatus = 1
           this.addBtnStatus=0
      }
 
  }
}
</script>

<style scoped>
.add{
  padding: 5px 10px;
  margin: 10px 0px;
}
.addTr{
  display: none;
}
.addBtn{
  display: none;
}
.confirmOrNot{
  display: none;
 
}
.cancell{
  padding: 5px 10px;
  margin: 10px 8px;
}
.confirm{
   padding: 5px 10px;
  margin: 10px 0px;
}
</style>