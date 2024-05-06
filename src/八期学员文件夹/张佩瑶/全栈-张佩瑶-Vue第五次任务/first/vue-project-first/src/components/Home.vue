<script setup>

</script>

<template>
    <div>
        <h2>我是home组件</h2>
        <div class="home-nav">
            <router-link to="/home/list" class="list">展示列表</router-link>
            <router-link to="/home/selected" class="selected">你的选择</router-link>
        </div>
        <div class="home-view">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<style scoped>
.home-nav {
    text-align: center;
    margin-bottom: 20px;
}
a {
    color: green;
}
.list {
    padding: 0 5px;
    border-right: 2px solid black;
}
.selected {
    padding: 0 5px;
}
</style>