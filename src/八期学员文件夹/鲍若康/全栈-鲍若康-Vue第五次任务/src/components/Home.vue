<script setup>

</script>

<template>
    <div class="body">

<h2>我是Home组件</h2>
    <span class="list"><router-link to="/home/list">展示列表</router-link></span>
    <span class="selected"><router-link to="/home/selected">你的选择</router-link></span>
    <router-view ></router-view> 
    </div>
</template>

<style lang="less" scoped>
.body{
    width: 400px;
    margin:0 auto;
}
.list {
    border-right: 2px solid rgb(130, 187, 193);
    padding-right: 5px;
    width: 40px;

}
.selected {

    padding-left: 5px;
    width: 40px;

}
</style>
