<template>
    <div class="navigator">
        <router-link to="/home" class="damn">home</router-link>
        <span>|</span>
        <router-link to="/about" class="damn">about</router-link>
    </div>

    <div class="showitem">
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
    
</script>

<style scoped>
    .navigator{
        position: relative;
        top: 50px;
        width: 200px;
        height: 50px;
        margin-left:50%;
        left:-80px;
    }
    span{
        position: absolute;
        left: 57px;
    }
    .damn{
        margin-left: 10px;
    }
    .showitem{
        position: relative;
        top: 40px;
        right:100px;
    }
</style>