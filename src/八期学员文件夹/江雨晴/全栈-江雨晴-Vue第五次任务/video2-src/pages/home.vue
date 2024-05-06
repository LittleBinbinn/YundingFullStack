<template>
    <div class="home">
        <h4>home</h4>
        <input type="text" placeholder="请输入您想添加的名称" v-model="inputValue" @keyup.enter="addlist">
        <ul>
            <router-link v-for="m in list" :to="`/home/user?user=${m.content}`"><li>{{m.content}}</li></router-link>
        </ul>
        <router-view></router-view>    
    </div>
</template>
<script setup name="home" lang="ts">
import { reactive,ref } from 'vue';
var list = reactive([
    {content:'apple'},
    {content:'pear'},
    {content:'banana'},
])
var inputValue = ref('')
function addlist(){
    if(inputValue.value.trim()){
        list.push({content:`${inputValue.value}`})
    }
    console.log(inputValue.value)
}

</script>
<style scoped>
    .home{
        position: relative;
        background-color: blanchedalmond;
        width: 70%;
        height: auto;
        padding: 20px 20px;
    }
    input{
        width: 150px;
        height: 25px;
        border: none;
        border-radius: 5px;
    }
    ul{
        display: flex;
    }
    li{
        margin-right: 30px;
    }
</style>