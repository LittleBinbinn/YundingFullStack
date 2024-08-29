<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link to="/home" class="nav">Home组件</router-link>
    <router-link to="/about" class="nav">About组件</router-link>
  </div>

    <router-view></router-view>
</template>

<style scoped>
  .nav {
    color: rgb(196, 133, 254);
    margin-left: 20px;
  }
</style>
