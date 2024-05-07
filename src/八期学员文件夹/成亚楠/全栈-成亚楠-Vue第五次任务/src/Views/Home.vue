<template>
    <div>
        <h1>我是Home组件</h1>
        <div class="list_select">
            <router-link to="/home/list">展示列表</router-link> |
            <router-link to="/home/select">你的选择</router-link>
        </div>
        <router-view ></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .list_select{
        margin-left: 280px;
    }
</style>