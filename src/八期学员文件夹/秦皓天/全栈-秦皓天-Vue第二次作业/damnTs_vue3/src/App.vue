<template>
    <div class="app">
        <MyList :books="BookList" 
        :deleteBook="deleteBook" 
        :addNumber="addNumber" 
        :reduceNumber="reduceNumber"
        :price="totalPrice"
        :addBook="addBook"
        :flag="flag"
        :sure="sure"
        :cancel="cancel"
        />
    </div>
</template>

<script lang="ts" setup>
import MyList from './components/MyList.vue'
import { reactive,ref,computed } from "vue";
import { type Books } from '@/types';

//let Person:PersonInter = {id:'01',age:60}
let BookList = reactive<Books>([
    { id: 1, name: '你不知道的JS(上卷)', price: 60,number:1 },
    { id: 2, name: '你不知道的JS(中卷)', price: 70,number:1 },
    { id: 3, name: '你不知道的JS(下卷)', price: 80,number:1 },
])
const totalPrice = computed(() => {  
    let total = 0;  
    for (const book of BookList) {  
        total += book.number * book.price;  
    }  
    return total 
}); 
function deleteBook(id:number){
    const index = BookList.findIndex(book => book.id === id);  
    BookList.splice(index,1)
}

function addNumber(id:number){
    BookList[id-1].number++
}

function reduceNumber(id:number){
    BookList[id-1].number--
    if(BookList[id-1].number<0){
        alert("购买的数量不得为负数")
        BookList[id-1].number = 0
    } 
}
let flag = ref(false)
function addBook(){
    flag.value = !flag.value

}
function cancel(){
    flag.value = !flag.value
}
function sure(bookObj:any){
    BookList.push(bookObj)
    flag.value = !flag.value
}
</script>

<style scoped>
.app {
    background-color: darkcyan;
    display: flex;
    position: relative;
    height: 600px;
    width: 1200px;
    left: 50%;
    margin-left: -600px;
}
</style>