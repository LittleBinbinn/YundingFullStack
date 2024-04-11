<template>
  <div class="app">
    <h4>热门歌手</h4>
    <hr>
    <authors :giveAugiveArtsits="artists"></authors>
    <hr>
    <h4>榜单</h4>
    <hr>
    <div class="billboard">
      <mode style="margin-right: 75px;" :imgUrl="newSong.coverImgUrl">
      <template v-slot:title>{{ newSong.name }}</template>
      <template v-slot:world>{{ newSong.description }}</template>
      <template v-slot:songName>
          <li v-for="(item,index) in newSong.tracks" :key="index">
          {{ item.name }}
          </li>
      </template>
      </mode>
      <mode style="margin-right: 75px;" :imgUrl="hotSong.coverImgUrl">
      <template v-slot:title>{{ hotSong.name }}</template>
      <template v-slot:world>{{ hotSong.description }}</template>
      <template v-slot:songName>
          <li v-for="(item,index) in hotSong.tracks" :key="index">
          {{ item.name }}
          </li>
      </template>
      </mode>
      <mode :imgUrl="originSong.coverImgUrl">
      <template v-slot:title>{{ originSong.name }}</template>
      <template v-slot:world>{{ originSong.description }}</template>
      <template v-slot:songName>
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
import authors from './components/authors.vue'
import mode from './components/mode.vue'
import artists from '@/data/artist'
import hotSong from '@/data/hotSong'
import newSong from '@/data/newSong'
import originSong from '@/data/originSong'
export default {
  components: { mode , authors},
  data() {
    return{
      artists: artists,
      hotSong: hotSong,
      newSong: newSong,
      originSong: originSong,
    }
  }
}
</script>

<style scoped>
.billboard{
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
li{
  margin-bottom: 5px;
}
</style>