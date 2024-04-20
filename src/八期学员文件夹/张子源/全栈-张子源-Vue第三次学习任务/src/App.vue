<template>
  <div class="app">
    <!-- 热门歌手 -->
    <div class="hotsingers">
      <h2>热门歌手</h2>
      <div class="singersbox">
        <singers v-for="(singer, index) in artist" :key="index">
          <template v-slot:SingerPhoto>
            <div class="SingerPhoto">
              <img v-bind:src="singer.picUrl" />
            </div>
          </template>

          <template v-slot:singerName>
            <div class="singerName"> {{ singer.name }}</div>
          </template>
        </singers>
      </div>
    </div>
      <!-- 榜单 -->
    <div class="list">
      <h2>榜单</h2>
      <div class="introduction">
        <songs>
          <!-- 以下的新歌榜，热歌榜，原创榜可以使用同一个模板来减少代码的书写量 -->
          <!-- 新歌榜 -->
          <template v-slot:ListName>
            <div class="ListName">
              {{ newSong.name }}
            </div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ newSong.description }}
            </div>
          </template>

          <template v-slot:picture>
            <div class="listPic">
              <img v-bind:src="newSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:song>
            <div v-for="(song, index ) in newSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </songs>
        <!-- 热歌榜 -->
        <songs>
          <template v-slot:ListName>
            <div class="ListName">{{ hotSong.name }}</div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ hotSong.description }}
            </div>
          </template>

          <template v-slot:picture>
            <div class="listPic">
              <img v-bind:src="hotSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:song>
            <div v-for="(song, index ) in hotSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </songs>
        <!-- 原创榜 -->
        <songs>
          <template v-slot:ListName>
            <div class="ListName">{{ originSong.name }}</div>
          </template>

          <template v-slot:Listintroduction>
            <div class="Listintroduction">
              {{ originSong.description }}
            </div>
          </template>

          <template v-slot:picture>
            <div class="listPic">
              <img v-bind:src="originSong.coverImgUrl" />
            </div>
          </template>

          <template v-slot:song>
            <div v-for="(song, index ) in originSong.tracks" :key="index">
              {{ index + 1 }}-{{ song.name }}
            </div>
          </template>
        </songs>
      </div>
    </div>
  </div>
</template>

<script>
import Singers from './components/Singers.vue'
import Songs from './components/Songs.vue'
import originSong from '../data/originSong.js';
import newSong from '../data/newSong.js';
import hotSong from '../data/hotSong.js'
import artist from '../data/artist.js';
export default
  {
    components: {
      Singers,
      Songs
    },
    data() {
      return {
        originSong,
        newSong,
        hotSong,
        artist
      }
    }
  }
</script>

<style scoped>
.app {
  width: 1000px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
}
.introduction {
  width: 1000px;
  height: 380px;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  margin-top: -15px;
  flex-direction: row;
}
.singersbox {
  width: 1000px;
  height: 120px;
  margin-top: -9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 4px solid black;
  border-bottom: 2px solid black;
  text-align: center;
}
img {
  width: 70px;
  height: 70px;
}
</style>