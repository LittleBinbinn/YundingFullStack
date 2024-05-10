<template>
  <div class="user">
    <div class="nav">我是user{{ $route.params.id }}</div>
    <content :name="$route.params.id"></content>
  </div>
</template>

<script setup>
import content from '../components/content.vue'
</script>

<style scoped>
.nav{
  font-size: 100px;
  color: black;
}
</style>