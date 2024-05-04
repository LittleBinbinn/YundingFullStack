<template>
    <h4>我是Home组件</h4>
    <span><router-link :to="{name:'list'}">展示列表</router-link></span>
    &nbsp;|&nbsp;
    <span><router-link :to="{name:'choice'}">你的选择</router-link></span>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>
<script setup name="Home" lang="ts">
import List from './Lists.vue';
import Choice from './Choice.vue';
import { KeepAlive } from 'vue';
</script>
<style scoped>
a{
    color: rgb(222, 143, 156);
}
</style>