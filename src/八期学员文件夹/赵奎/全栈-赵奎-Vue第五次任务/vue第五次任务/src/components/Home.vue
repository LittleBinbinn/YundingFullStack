<script setup>
</script>

<template>
    <div>
    <h2>我是Home组件</h2>
    <span class="list"><router-link to="/home/list">展示列表</router-link></span>
    <span class="selected"><router-link to="/home/decision">你的选择</router-link></span>
    <router-view ></router-view> 
    </div>
</template>

<style lang="less" scoped>
.list {
    border-right: 2px solid rgb(9, 67, 83);
    padding-right: 5px;
    width: 40px;
}
.selected {
    padding-left: 5px;
    width: 40px;
}
</style>