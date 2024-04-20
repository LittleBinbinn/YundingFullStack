<script setup>
const props = defineProps({
    Artsits: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <div class="author">
        <div v-for="(item,index) in Artsits" :key="index" class="artsitsCotent">
            <img :src="item.picUrl">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<style scoped>
img{
    width: 100px;
    height: auto;
    }
    .author{
        display: flex;
        justify-content: flex-start;
    }
    .artsitsCotent{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
    }
    span{
        width: 100px;
        text-align: center;
    }
</style>