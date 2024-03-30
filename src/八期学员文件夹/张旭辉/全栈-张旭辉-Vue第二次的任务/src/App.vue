<template>
    <h2>总价: ￥{{totalPrice}} 当前选中书籍：{{nowname}}</h2>
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
                <tr :class="{yi:index==now}" @click="changetwo(index)" v-for="(item,index) in books" :key="item.id">
                    <td>{{index+1}}</td>
                    <td @click="change(index)">{{item.name}}</td>
                    <td>￥{{item.price}}</td>
                    <td>
                        <button v-bind:disabled="item.count<=0" @click="decrement(index)">-</button>
                        {{item.count}}
                        <button @click="increment(index)">+</button>
                    </td>
                    <td>
                        <button @click="removeBook(index,item)">移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addbook" :class="{ hide: showit }">添加</button>
        <button @click="submit" :class="{ hide: hideit }">确认</button>
        <button @click="quit":class="{ hide: hideit }">取消</button>
</template>

<script>
export default{
    data(){
                return{
                   books: [
                    {
                        name:'《JavaScript高级程序设计》',
                        price:126,
                        count:1,
                        one:false,
                    },
                    {
                        name:'《你不知道的 JS (上卷) 》',
                        price:78,
                        count:1,
                        one:false,
                    },
                    {
                        name:'《你不知道的 JS (中卷) 》',
                        price:76,
                        count:1,
                        one:false,
                    },
                    {
                        name:'《你不知道的 JS (下卷) 》',
                        price:64,
                        count:1,
                        one:false,
                    }
                ],
                nowname:"",
                now:-1
                }
            },
            computed:{
                totalPrice(){
                    let price=0;
                    for(const item of this.books){
                        price+=item.price*item.count
                    }
                    return price
                }
            },
            methods:{
                decrement(index){
                    this.books[index].count--
                },
                increment(index){
                    this.books[index].count++
                },
                change(index){
                    this.nowname=this.books[index].name
                    this.books.one=false;
                    this.books[index].one=!this.books[index].one
                },
                removeBook(index,item){
                    this.books.splice(index,1)
                },
                changetwo(index){
                    this.now=index
                }
                }
}
</script>

<style>
    table{
            border-collapse: collapse;
            text-align: center;
        }
        th,td{
            border:1px solid black;
            padding: 8px 16px ;
        }
        thead{
            background-color: lightgray;
        }
        .yi{
            background-color:orange;
        }
</style>