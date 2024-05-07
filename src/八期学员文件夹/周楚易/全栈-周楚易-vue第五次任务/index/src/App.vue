<template>
  <div class="nav">
    <router-link to="/home" class="router-link-active">Home</router-link>
    <span>|</span>
    <router-link to="/about" class="router-link-active">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script>

</script>

<style>
.router-link-active{
  color: chartreuse;
  position: relative;
  left: 50%;
}
span{
  position: relative;
  left: 50%;
}
</style>
