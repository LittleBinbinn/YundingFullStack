<template>
    <h2>我是list组件</h2>
    <ul>  
        <li v-for="(item, index) in items" :key="index" @click="addSelected(item)">{{ item }}</li>  
    </ul>  
    <input type="text" id="add" @keyup.enter="addItem" v-model="newItem"> 
</template>

<script setup>  
import { ref } from 'vue';  
const items = ref(['吃饭','睡觉','打豆豆']);  
const newItem = ref('');  
function addItem() {  
    if (newItem.value.trim() !== '') {  
        items.value.push(newItem.value);  
        newItem.value = ''; // 清空输入框  
    }  
}
function addSelected(item) {
    localStorage.setItem("now-list", item)
    location.href='http://localhost:8080/#/home/selected'
}
</script>  

<style scoped>  
/* 你可以在这里添加一些样式 */  
</style>