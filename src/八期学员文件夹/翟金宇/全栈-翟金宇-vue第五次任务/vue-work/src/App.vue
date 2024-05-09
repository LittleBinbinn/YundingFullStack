<template>
  <div class="app">
    <div class="nav">APP</div>
    <router-link to="/home" @click="nowcomponent(home)">home</router-link>
    <br>
    <router-link to="/about" @click="nowcomponent(about)">about</router-link>
    <br>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>


  </div>
  
</template>

<script setup>
import home from './views/home'
import about from './views/about'
import user from './views/user'
import userModule1 from './views/userModule1'
import userModule2 from './views/userModule2'
let currentcomponent = home
function nowcomponent(component) {
  currentcomponent = component
}
</script>

<style scoped>
.nav{
  font-size: 120px;
  color: black;
}
</style>