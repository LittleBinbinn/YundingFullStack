<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <span class="home"><router-link to="/home">Home</router-link></span>
    <span class="about"><router-link to="/about">About</router-link></span>
      <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.home {
    border-right: 2px solid rgb(2, 56, 60);
    padding-right: 5px;
    width: 40px;
}
.about {
    padding-left: 5px;
    width: 40px;
}
</style>