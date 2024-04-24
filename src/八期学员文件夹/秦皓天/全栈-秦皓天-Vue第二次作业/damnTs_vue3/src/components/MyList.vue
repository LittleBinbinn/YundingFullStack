<template>
    <div class="title">
        <span>总价：￥{{price}}</span>
        <span>当前选中的书籍:{{checkName}}</span>
    </div>
    <div class="list">
        <table border="2">
            <tr>
                <th>序号</th>
                <th>书名</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            <MyItem v-for="book in books"
            :book="book"
            :key="book.id"
            @showbook='bookShow'
            :deleteBook ="deleteBook"
            :addNumber="addNumber"
            :reduceNumber="reduceNumber"        
            />
        </table>
    <button @click="addNewBook">添加</button>
    </div>
    <div class="add" v-show="flag">
        <input type="text" placeholder="请输入添加的书名" v-model="bookName">
        <input type="text" placeholder="请输入价格" v-model="bookPrice">
        <button @click="sureOpt">确定</button>
        <button @click="cancelOpt">取消</button>
    </div>
</template>

<script lang="ts" setup name="'MyList'">
import {ref} from "vue";
let checkName = ref('')
let bookName = ref('')
let bookPrice = ref('')
import MyItem from "./MyItem.vue";
const prop = defineProps(['books','deleteBook','addNumber','reduceNumber','price','addBook','flag','sure','cancel'])
    function bookShow(value:string){
        checkName.value = "《"+value+"》"
    }
    function addNewBook(){
        prop.addBook()
    }
    function sureOpt(){
        if(!bookName.value.trim()) return alert("书名不能为空")
        if(!bookPrice.value.trim()) return alert("书的价格不能为空")
        const bookObj = {id:prop.books.length+1,name:bookName.value,price:bookPrice.value,number:1}
        prop.sure(bookObj)
        bookName.value = ''
        bookPrice.value = ''
    }
    function cancelOpt(){
        bookName.value = ''
        bookPrice.value = ''
        prop.cancel()
    }
</script>

<style scoped>
.add{
    position: relative;
    top: 210px;
    left: -800px;
}
.add button {
    position: relative;
    top: 40px;
    left: -155px;
}
 .title{
        width: 1200px;
        height: 20px;
        margin: 20px;
        background-color: #fff;
    }
    .title span {
        margin-left: 100px;
    }
.list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 120px;
}

table {
    border-collapse: collapse;
    width: 800px;
}

table,
th,
td {
    border: 1px solid black;
}

th {
    text-align: center;
    height: 20px;
}
button {
    margin-top: 10px;
    width: 60px;
    height: 30px;
}
button:hover{
    background-color: darksalmon;
}
</style>