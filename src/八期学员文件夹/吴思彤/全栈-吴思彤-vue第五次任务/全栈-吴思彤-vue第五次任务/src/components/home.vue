<template>
    <h2>我是home组件</h2>
    <div class="nav">
    
    <router-link to="/home/list">展示列表</router-link>
    <router-link to="/home/selected">你的选择</router-link>
    </div>  
    <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
</style>