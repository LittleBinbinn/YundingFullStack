<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link to="/home">Home组件</router-link>
    <router-link to="/about">About组件</router-link>
    <router-view></router-view>
  </div>

    
</template>

<style scoped>
  
</style>