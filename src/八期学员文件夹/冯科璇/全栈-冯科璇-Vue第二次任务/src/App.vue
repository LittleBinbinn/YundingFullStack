<template>
    <div id="app">
        <template v-if="books.length">

            <div>
              <h2>总价:¥{{totalPrice}}</h2>
              <h2>当前书籍:<span v-if="currentIndex>=0">{{books[currentIndex].name}}</span></h2>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>书籍名称</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in books" :class="{active:index === currentIndex}">
                        <OneBook :books="books" :index="index" @onClick="onClick"></OneBook>
                    </tr>
                    <tr :class="{unvisable:bul}">
                      <td>{{ books.length + 1 }}</td>
                      <td><input type="text" v-model="newName"></td>
                      <td><input type="number" v-model="newPrice"></td>
                      <td><button>-</button>0<button>+</button></td>
                      <td><button disabled="true">移除</button></td>
                    </tr>
                </tbody>
            </table>
            <button :class="{ unvisable: !bul }" @click="add">添加</button>
            <button :class="{ unvisable: bul }" @click="determine">确定</button>
            <button :class="{ unvisable: bul }" @click="cancel">取消</button>

        </template>
        <template v-else>
            <h1>购物车为空</h1>
        </template>
    </div>
</template>

<script>
import OneBook from './components/OneBook.vue'
export default {
  components: {
            OneBook
    },
      data(){
                return{
                    books:[{
                        id:1,
                        name:'《js高级程序设计》',
                        price:20,
                        count:1
                    },{
                        id:2,
                        name:'《你不知道的js上》',
                        price:30,
                        count:1
                    },{
                        id:3,
                        name:'《你不知道的js中》',
                        price:40,
                        count:1
                    },{
                        id:4,
                        name:'《你不知道的js下》',
                        price:50,
                        count:1
                    },],
                    currentIndex:-1,
                    bul:true,
                    newName: "",
                    newPrice:0
                }
            },
            methods:{
                onClick(index) {
                  this.currentIndex = index
              },
                add() {
                    this.bul = false
                  },
                determine() {
                    if (this.newName == "") {
                      alert("书名不能为空!")
                    }
                    else if (this.newPrice <= 0) {
                      alert("价格写措啦!")
                    }
                    else {
                      this.books.push({ id: this.books.length + 1, name: this.newName, price: this.newPrice, count: 0 })
                      this.bul = true
                    }
                  },
                  cancel() {
                      this.bul = true
                  },
            },
            computed:{
                totalPrice(){
                    let price = 0
                    for (const item of this.books){
                        price += item.price*item.count
                    }
                    return price
                }
            }
    }
</script>

<style scoped>
  table{
            border-collapse: collapse;
            text-align: center;
            width: 600px;
        }
        thead{
            background-color: #f5f5f5;
        }
        th,td{
            border: 1px solid #aaa;
            padding: 8px 16px;
            
        }
        .active{
            background-color: orange;
        }
        .unvisable{
          display: none;
        }
</style>
