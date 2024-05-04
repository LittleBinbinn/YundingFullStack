<template>
    <div class="main">
        <router-link to="/home" class="home">home</router-link>
        <router-link to="/about" class="about">about</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.home{
    margin-left: 400px;
    padding-right: 5px ;
}
.main{
    width: 500px;
    margin: auto;
}
.router-link-active{
    color: red;
}
</style>
