<template>
  <div>热门歌手</div>
  <div style="border: 1px solid black;"></div>
  <div class="singer">
  <artist v-for="item in artists">
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

<script>
import artist from "./components/artist.vue"
import song from "./components/song.vue"
import artists from "./data/artist.js"
import hotSong from "./data/hotSong.js"
import newSong from "./data/newSong.js"
import originSong from "./data/originSong.js"
export default {
  components:{
    artist,
    song
  },
  data(){
    return {
      artists,
      songs: [
        hotSong,
        newSong,
        originSong
      ]
    }
  }
}
</script>

<style scoped>
img{
  width: 60px;
}
</style>
