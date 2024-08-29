<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <!-- 点击就会跳转到对应的组件 -->
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <!-- 占位 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .app {
    /* margin: auto; */
    position: relative;
    top: 130px;
    left: 35%;
  }
</style>