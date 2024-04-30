<template>
    <div class="home">
    <h2>我是home组件</h2>
    <div class="HomeNav">
        <router-link to='/home/infomation' class="showtable">展示列表</router-link>
        <router-link to="/home/mychoice" class="mychoice">|我的选择</router-link>
    </div>
</div>
    <router-view ></router-view>
</template>
<script setup>
</script>
<style scoped>
.home{
    width: 400px;
    margin:0px auto;
    /* background-color:bisque; */
}
.HomeNav{
    width: 400px;
    font-size: 18px;
    margin: 0px auto;
    text-align: center;
}
.showtable {
    color:darkgreen
}
.mychoice{
    color:darkgreen
}
</style>