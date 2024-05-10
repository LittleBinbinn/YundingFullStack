<template>
  <div class="app">
    <div class="nav">APP</div>
    <router-link to="/home">home</router-link>
    <br>
    <router-link to="/about">about</router-link>
    <br>
      <router-view v-slot="{ Component }">
        <keep-alive include="home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>


  </div>
  
</template>

<script setup>
</script>

<style scoped>
.nav{
  font-size: 120px;
  color: black;
}
</style>