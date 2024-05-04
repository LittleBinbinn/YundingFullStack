<template>
  <div id="app">

    <router-link to="/">Home</router-link>  &nbsp;| 
    <router-link to="/about">About</router-link>
    
    <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
    </router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
</style>
