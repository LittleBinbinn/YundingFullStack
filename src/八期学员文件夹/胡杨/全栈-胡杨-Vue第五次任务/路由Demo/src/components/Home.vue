<script setup>

</script>

<template>
    <h2>我是Home组件</h2>
    <router-link to="/home/list">展示列表</router-link>
    |
    <router-link to="/home/selected">你的选择</router-link>
    <br>
    <router-view></router-view>
</template>

<style>
</style>