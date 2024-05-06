<template>
    <h2>我是home组件</h2>
    <div class="nav">
    <!-- 点击就会跳转到对应的组件 -->
    <router-link to="/home/list">你的列表</router-link>
    <router-link to="/home/selected">你的选择</router-link>

    </div>
    <!-- 占位 -->
    <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
</style>