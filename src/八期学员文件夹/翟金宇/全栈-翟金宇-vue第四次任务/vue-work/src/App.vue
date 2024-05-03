<template>
  <div>热门歌手</div>
  <div style="border: 1px solid black;"></div>
  <div class="singer">
  <artist  v-for="item in artists" id="item">
    <template #head>
    <img :src=item.picUrl alt="">
    </template>
    <template #name>
      <span>{{ item.name }}</span>
    </template>
  </artist>
  </div>
  <div>榜单</div>
  <div style="border: 1px solid black;"></div>
  <div class="songs">
    <song v-for="item in songs">
    <template #title>
      {{ item.name }}
    </template>
    <template #content>
      {{ item.description }}
    </template>
    <template #pic>
      <img :src=item.coverImgUrl alt="" align="right">
    </template>
    <template #ge>
      <div v-for="titem in item.tracks">{{ titem.name }}</div>
    </template>
  </song>
  </div>
  
  
</template>

<script setup>
import { ref } from 'vue' 
import Artist from "./components/artist.vue"
import Song from "./components/song.vue"
import Artists from "./data/artist.js"
import HotSong from "./data/hotSong.js"
import NewSong from "./data/newSong.js"
import OriginSong from "./data/originSong.js"

const artist = ref(Artist)
const artists = ref(Artists)
const hotSong = ref(HotSong)
const newSong = ref(NewSong)
const orginSong = ref(OriginSong)
const songs = ref([
  HotSong,
  NewSong,
  OriginSong
])
console.log(songs.value);

</script>

<style scoped>
img{
  width: 60px;
}
</style>
