<template>
  <div class="header-router">
    <router-link to="/home">Home</router-link>
     |
    <router-link to="/about">About</router-link>
    <router-view></router-view>

  </div>


</template>
<script setup>


</script>
<style>
  .header-router {
    width: 100%;
    text-align: center;
  }
</style>