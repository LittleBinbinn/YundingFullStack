<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function homeClick() {
  router.push({
    path: '/home'
  })
}
function aboutClick() {
  router.push({
    path: '/about'
  })
}
</script>

<template>
  <h1 class="title">APP</h1>
  <button id="home" @click="homeClick">home</button>
  <button id="about" @click="aboutClick">about</button>
  <RouterView></RouterView>
</template>

<style scoped>
.title {
  text-align: center;
  color: green;
}
</style>
