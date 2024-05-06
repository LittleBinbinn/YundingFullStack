<template>
  <div class="app">
    <div class="nav">

<router-link
to="/home"
>home</router-link>
<router-link
to="/about"
>
|about</router-link>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script setup>

</script>
<style>
.nav{
  width: 400px;
  margin: auto;
  text-align: center;
  font-size: 20px;
}
</style>