<template>
    <h2>我是home组件</h2>
    <div>
        <router-link to='/home/show' class="show">展示列表</router-link>
        <router-link to="/home/choose" class="choose">你的选择</router-link>
        <router-view></router-view>
    </div>
</template>
<script setup>

</script>
<style>
.show,.choose{
color: greenyellow;
}
.show{
margin-left: 360px;
padding-right: 10px;
}
</style>