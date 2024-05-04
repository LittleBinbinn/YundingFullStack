<template>
  <div class="app">
    <div class="box1">
      <router-link to="/home" class="one">home</router-link>
      <span>|</span>
      <router-link to="/about" class="one">about</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
.app {
  width: 400px;
  margin: auto;
  text-align: center;
  font-size: 20px;
}

span {
  position: absolute;
  left: 737px;
}

.one {
  width: 100px;
  padding: 5px;
}
</style>