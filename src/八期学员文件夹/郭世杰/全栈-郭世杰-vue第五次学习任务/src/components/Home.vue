<template>
    <div class="name">我是home组件</div>
    <div >
        <router-link to="/home/list" class="gongneng">展开列表</router-link>
        <router-link to="/home/choice" class="gongneng">你的选择</router-link>
    </div>
<router-view v-slot="{ Component }">
    <component :is="Component" />
</router-view>
    
</template>

<script setup>
</script>

<style scoped>
    .gongneng {
        color:rgb(106, 192, 106);  
        margin-left: 20px;
    }
    .name {
        font-size: 25px;
        font-weight: 900;
    }
</style>