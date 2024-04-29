<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
</script>

<template>
  <div class="body">
    <span class="home"><router-link to="/home">Home</router-link></span>
    <span class="about"><router-link to="/about">About</router-link></span>
      <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.body{
  width: 400px;
margin: 0 auto;
}
.home{
  border-right: 2px solid rgb(130, 187, 193);
  padding-right: 5px;
  width: 40px;
  
}
.about {
 
  padding-left: 5px;
  width: 40px;

}
</style>
