<template>
    <div class='background'><h3>app</h3>
        <router-link to="/home">home</router-link>|
        <router-link to="/about">about</router-link>
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: pink;
    padding: 20px 30px;
    text-align: left;
}
   
</style>