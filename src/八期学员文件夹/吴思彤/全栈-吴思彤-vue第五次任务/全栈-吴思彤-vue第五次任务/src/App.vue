<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .app {
    position: relative;
    top: 130px;
    left: 35%;
  }
</style>