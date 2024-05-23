<template>
  <div>
    <h2>{{ hotSinger }}</h2>
    <hr>
    <SingerItem></SingerItem>
    <hr>
    <h2>{{ songList }}</h2>
    <hr>
    <SongItem></SongItem>
  </div>  
    
  
</template>


<script setup>
    import {ref} from 'vue'
    import SingerItem from './components/SingerItem.vue'
    import SongItem from './components/SongItem.vue'
    const hotSinger = ref("热门歌手")
    const songList = ref('榜单')
    

    
  

</script>