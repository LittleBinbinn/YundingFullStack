<template>
    <div>
        <h2>我是home组件</h2>
        <router-link to="/home/List" class="text">展示列表</router-link>
        <span>|</span>
        <router-link to="/home/choose" class="text">你的选择</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
</script>

<style scoped>
.text {
    color: rgb(76, 193, 135);
    width: 200px;
    padding: 5px;
}
</style>