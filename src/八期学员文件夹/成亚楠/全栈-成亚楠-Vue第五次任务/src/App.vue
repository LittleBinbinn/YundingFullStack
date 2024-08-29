<template>
  <div>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link><br>
    <router-view class="zujian"></router-view>
  </div>
  
</template>

<script setup>

</script>

<style>
  #app{
    text-align: center;
    margin-top: 60px;
  }
  .zujian{
    margin-left: -280px;
  }
</style>
