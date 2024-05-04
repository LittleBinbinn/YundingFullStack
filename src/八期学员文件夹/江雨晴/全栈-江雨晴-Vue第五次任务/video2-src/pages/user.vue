<template>
    <div class='back'>
        <div class='title'>我是{{route.query.user}}</div>
        <h3>user</h3>
        <span><router-link to='/home/user/moudule1'><button>userModule1</button></router-link></span>
        &nbsp;&nbsp;
        <span><router-link to='/home/user/moudule2'><button>userModule1</button></router-link></span>
        <router-view></router-view>
    </div>
    
</template>
<script setup name="user" lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<style scoped>
.back{
    position: relative;
    background-color: rgb(245, 183, 245);
    width: 50%;
    height: auto;
    padding: 20px 20px;
}
.title{
    background-color: white;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 15px;
}
button{
    width: 100px;
    height: 50px;
    background-color: palevioletred;
    font-size: 12px;
    color: white;
}
</style>