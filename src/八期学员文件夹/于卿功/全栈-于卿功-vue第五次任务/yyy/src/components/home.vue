<script setup>


</script>

<template>
<div>
    <h2 >我是home组件</h2>
    <router-link to="/home/list/1" active-class="active">展示列表 </router-link>
    <router-link to="/home/option/1" active-class="active"> 我的选择</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped>
    .active{
        color:red;
     }
</style>