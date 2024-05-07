<script setup>

</script>

<template>
  <div class="home">
    <h2 style="left: 40%; position: relative">我是Home组件</h2>

    <div class="home-nav">
      <router-link to="/home/list" class="router-link-active">显示列表</router-link>
      <span>|</span>
      <router-link to="/home/chosen" class="router-link-active">你的选择</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>