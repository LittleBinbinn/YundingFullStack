<template>
    <div class="home">
        <h2>我是Home组件</h2>
    </div>
    <div class="item">
        <router-link to="/home/list" class="show">展示列表</router-link>
        <span>|</span>
        <router-link to="/home/choose" class="show">你的选择</router-link>
    </div>
    <div class="showinfo">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}
.item span{
    position: absolute;
    margin-left: 2px;
}
.item{
    position: absolute;
    top: 50px;
    width: 200px;
    height: 80px;
    left: 10px;
    margin-left: 50%;
}
.show{
    color: aquamarine;
    font-size: 18px;
    margin-left: 10px;
}
.showinfo{
    position: absolute;
    top: 100px;
    width: 400px;
    height: 400px;
    left: 50%;
    margin-left: -100px;
}
</style> 