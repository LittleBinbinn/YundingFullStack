<script setup>
</script>

<template>
<div class="box">
    <router-link to="/home" active-class="active">Home </router-link>
    <router-link to="/about" active-class="active"> About</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped>
    .box{
      width: 300px;
     margin: 0 auto;
     }
     .active{
        color:red
     }
</style>