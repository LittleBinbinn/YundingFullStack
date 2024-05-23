<template>
    <SingerList :artist="artist">
        <div class="singer" v-for="(singer, index) in artist" :key="index">
            <img :src="singer.picUrl" :alt="singer.picUrl">
            <span>{{ singer.name }}</span>
        </div>
    </SingerList>
</template>



<script setup>

    import SingerList from './SingerList.vue'
    import artist from '@/artist'
</script>


<style scoped>
.singer {
    width: 100px;
    flex: 1;
    text-align: center;
    gap: 10px;
}
.singer img {
    width: 100%;
}
</style>