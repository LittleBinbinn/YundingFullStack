<script setup>

</script>

<template>
  <div class="app">
    <div class="nav">
        <router-link to="/home" class="home">Home</router-link>
        <router-link to="/about" class="about">About</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.app {
  margin: 60px auto;
}
.nav {
  text-align: center;
}
.view {
  width: 300px;
  margin: 25px auto;
}
.home {
  border-right: 2px solid black;
  padding: 0 5px;
}
.about {  
  padding: 0 5px;
}
</style>