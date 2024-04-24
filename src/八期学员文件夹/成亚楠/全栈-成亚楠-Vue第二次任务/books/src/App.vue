<template>
    <div>
        <h1>总价：{{formatPrice(totalPrice)}}&nbsp;&nbsp;&nbsp;当前选中书籍：{{showname}}</h1>
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
                <bookitem  v-for="(item,index) in books " :key="item.id " :class="{active:isBookActive(item)}" :books="books" :index="index" :item="item"/>
                <tr v-if="showaddbook">
                    
                    <td>{{books.length + 1}}</td>
                    <td><input type="text" v-model="newName"></td>
                    <td><input type="text" v-model="newPrice"></td>
                    <td><button>-</button>{{newCount}} <button>+</button></td>
                    <td><button>移除</button></td>

                        <button @click="add">确认</button>
                        <button @click="cancel">取消</button>
                    
                </tr>
                
                    
                <tr v-else>
                    <button @click="showaddbook=true">添加</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import  bookitem from './bookitem.vue'

export default {
    components: {
        bookitem
    },
    data() {
        return {
            books: [
                {
                    id: 1,
                    name:"《JavaScript高级程序设计》",
                    price: 126,
                    count: 1,
                },
                {
                    id: 2,
                    name:"《你不知道的js(上卷)》",
                    price: 78,
                    count: 1,
                },
                {
                    id: 3,
                    name:"《你不知道的js(中卷)》",
                    price: 76,
                    count: 1,
                },
                {
                    id: 4,
                    name:"《你不知道的js(下卷)》",
                    price: 64,
                    count: 1,
                }
            ],
            showname: "",
            activeBookId: null,
            newName:"",
            newPrice:"",
            newCount:1,
            showaddbook:false
        };
    },
    methods: {
        formatPrice(price){
            return "¥" + price
        },
        showName(item) {
            this.showname = item.name
            this.activeBookId = item.id
        },
        isBookActive(item) {  
            return this.activeBookId === item.id;  
        },

        add(){
            if(this.newName){
                alert("书名不能为空")
            }else if(this.newPrice<0){
                alert("价格必须为正数")
            }else{
                const newBook = { id: this.books.length+1, name: this.newName, price: this.newPrice, count: this.newCount }
                this.books.push(newBook)
                newName:""
                newPrice:""
                newCount:1
                showaddbook:false
            }
        },
        cancel(){
            showaddbook:false
        }
        
    },
    computed: {
        totalPrice() {
            let price = 0
            for (const item of this.books) {
                price += item.price * item.count
            } return price
        }
    } 
}
</script>
<style >
table{
    border-collapse: collapse;
    text-align: center;
}
thead{
    background-color: #f5f5f5;
}
th,td{
    border: 1px solid gray;
    padding: 8px 20px;
}
.active{
    background-color: orange;
}
</style>