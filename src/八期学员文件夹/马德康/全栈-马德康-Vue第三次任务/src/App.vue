<template>
  <div class="app">
    <h2>热门歌手</h2>
    <hr>
    <authors :Artsits="artists"></authors>
    <hr>
    <h2>榜单</h2>
    <hr>
    <div class="songBillboard">
      <mode :imgUrl="newSong.coverImgUrl">
      <template v-slot:title>{{ newSong.name }}</template>
      <template v-slot:description>{{ newSong.description }}</template>
      <template v-slot:name>
          <li v-for="(item,index) in newSong.tracks" :key="index">
          {{ item.name }}
          </li>
      </template>
      </mode>
      <mode :imgUrl="hotSong.coverImgUrl">
      <template v-slot:title>{{ hotSong.name }}</template>
      <template v-slot:description>{{ hotSong.description }}</template>
      <template v-slot:name>
          <li v-for="(item,index) in hotSong.tracks" :key="index">
          {{ item.name }}
          </li>
      </template>
      </mode>
      <mode :imgUrl="originSong.coverImgUrl">
      <template v-slot:title>{{ originSong.name }}</template>
      <template v-slot:description>{{ originSong.description }}</template>
      <template v-slot:name>
          <li v-for="(item,index) in originSong.tracks" :key="index">
          {{ item.name }}
          </li>
      </template>
      </mode>
    </div>
    <hr>
  </div>
</template>

<script>
import authors from './authors.vue'
import mode from './mode.vue'
import artists from '@/data/artist'
import hotSong from '@/data/hotSong'
import newSong from '@/data/newSong'
import originSong from '@/data/originSong'
export default {
  components: {
    mode ,
    authors
   },
  data() {
    return{
      artists,
      hotSong,
      newSong,
      originSong
    }
  }
}
</script>

<style scoped>
hr {
  margin-bottom: 3px;
}
li{
  margin-bottom: 6px;
}
</style>