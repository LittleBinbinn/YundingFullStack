<template>
<div class="app">
<!-- 热门歌手 -->
    <div class="hotsingers">
      <h2 style="font-weight:bold ;">热门歌手</h2>
      <div class="singers">
        <singers v-for="(item, index) in artist" :key="index">
          <template v-slot:SingerPhoto>
            <div class="SingerPhoto">
              <img :src="item.picUrl" />
            </div>
          </template>

          <template v-slot:singerName>
            <div class="singerName"> {{ item.name }}</div>
          </template>
        </singers>
      </div>
    </div>

<!-- 榜单 -->
    <div class="list">
      <h2 style="font-weight:bold;">榜单</h2>
      <div class="content">
        <!-- 新歌榜 -->
        <List>
          <template v-slot:ListName>
            <div class="ListName" >
              {{ newSong.name }}
            </div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ newSong.description }}
            </div>
          </template>

          <template v-slot:pic>
            <div class="listPic">
              <img v-bind:src="newSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:songs>
            <div v-for="(song, index ) in newSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </List>

        <!-- 热歌榜 -->
        <List>
          <template v-slot:ListName>
            <div class="ListName">{{ hotSong.name }}</div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ hotSong.description }}
            </div>
          </template>

          <template v-slot:pic>
            <div class="listPic">
              <img v-bind:src="hotSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:songs>
            <div v-for="(song, index ) in hotSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </List>

        <!-- 原创榜 -->
        <List>
          <template v-slot:ListName>
            <div class="ListName">{{ originSong.name }}</div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ originSong.description }}
            </div>
          </template>

          <template v-slot:pic>
            <div class="listPic">
              <img v-bind:src="originSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:songs>
            <div v-for="(song, index ) in originSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </List>
      </div>
    </div>
  </div>
</template>

<script>
import Singers from './components/Singers.vue'
import List from './components/List.vue'
import originSong from '../data/originSong.js';
import newSong from '../data/newSong.js';
import hotSong from '../data/hotSong.js'
import artist from '../data/artist.js';
export default{
    components: {
      Singers,
      List
    },
    data() {
      return {
        artist,
        hotSong,
        newSong,
        originSong,
      }
    }
  }
</script>

<style scoped>
.app {
  width: 1200px;
  height: 800px;
  background-color: rgb(238, 241, 244);
}
.singers {
  width: 1200px;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-top: 3px solid black;
  border-bottom: 2px solid black;
}
img {
  width: 100px;
  height: 100px;
}
.content {
  width: 1200px;
  height: 460px;
  border-top: 3px solid black;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
}
.content > div{
  flex: 1;
}
.ListName{
  font-weight: bold;
}
</style>