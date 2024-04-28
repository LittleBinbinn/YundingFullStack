<script setup>
</script>

<template>
  <div>
    <RouterLink to="/home">home</RouterLink>
    ||
    <RouterLink to="/about">about</RouterLink>
  </div>
  <RouterView>
  </RouterView>
</template>

<style>
a {
  color: rgb(84, 233, 183);
  font-size: 15px;
}

.router-link-active {
  color: rgb(46, 168, 127);
  font-size: 20px;
}
</style>
