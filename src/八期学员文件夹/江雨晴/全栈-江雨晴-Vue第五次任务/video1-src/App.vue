<template>
    <div class="head">
    <router-link :to="{name:'Home'}">Home</router-link>
    &nbsp;|&nbsp;
    <router-link :to="{name:'About'}">About</router-link>
    </div>
    <keep-alive>
        <router-view></router-view> 
    </keep-alive>
    
</template>
<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router';
</script>
<style scoped>
    .head{
        position: relative;
        margin-top: -400px;
    }
</style>