<script setup>

</script>

<template>
    <h2>我是Home组件</h2>
    
    <div class="ab">
        <div class="a">
            <router-link to="/home/show" class="hh">展示列表</router-link>
        </div>
        <div class="b">
            <router-link to="/home/choose" class="hh">你的选择</router-link>
        </div>
    </div>
    <router-view ></router-view>
</template>

<style scoped>
    .ab {
        display: flex;
    
    }
    .a {
        padding-left: 120px;
        padding-right: 5px;
        border-right: 2px solid black;
    }
    .b {
        padding-left:5px
    }
    .hh {
        color: forestgreen;
    }
</style>
