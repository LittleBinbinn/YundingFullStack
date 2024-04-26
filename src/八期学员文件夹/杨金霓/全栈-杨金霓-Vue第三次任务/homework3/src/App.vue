<template>
  <div class="app">
    <div class="hotSingers">
      <h2>热门歌手</h2>
      <hr>
      <div class="singers">
        <singers v-for = "(singer,index) in artist" :key = "index">
          <template v-slot:singerImg>
            <div class="singerImg">
              <img :src = "singer.picUrl">
            </div>
          </template>
          <template v-slot:singerName>
            <div class="singerName">{{singer.name}}</div>
          </template>
        </singers>
      </div>
      <hr>
    </div>
    <div class="list">
      <h2>榜单</h2>
      <hr>
      <div class="award">
        <singers>
          <template v-slot:singerImg >
            <div class="box">
              <div class="singerImg">
              <div class="title">{{ newSong.name }}</div>
              <div class="text">{{ newSong.description }}</div>
            </div>
            <img :src = "newSong.coverImgUrl">
            </div>
            <hr>
          </template>
          <template v-slot:singerName>
            <div class="singerName">
              <div class="songs" v-for="(song,index) in newSong.tracks" :key="index">
                {{ index + 1}}-{{ song.name}}
              </div>
            </div>
          </template>
        </singers>
        <singers>
          <template v-slot:singerImg>
            <div class="box">
              <div class="singerImg">
              <div class="title">{{ hotSong.name }}</div>
              <div class="text">{{ hotSong.description }}</div>
            </div>
            <img :src = "hotSong.coverImgUrl">
            </div>
            <hr>
          </template>
          <template v-slot:singerName>
            <div class="singerName">
              <div class="songs" v-for="(song,index) in hotSong.tracks" :key="index">
                {{ index + 1}}-{{ song.name}}
              </div>
            </div>
          </template>
        </singers>
        <singers>
          <template v-slot:singerImg>
            <div class="box">
              <div class="singerImg">
              <div class="title">{{ originSong.name }}</div>
              <div class="text">{{ originSong.description }}</div>
            </div>
            <img :src = "originSong.coverImgUrl">
            </div>
            <hr>
          </template>
          <template v-slot:singerName>
            <div class="singerName">
              <div class="songs" v-for="(song,index) in originSong.tracks" :key="index">
                {{ index + 1}}-{{ song.name}}
              </div>
            </div>
          </template>
        </singers>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import singers from './components/singers.vue'
import originSong from '../data/originSong.js'
import newSong from '../data/newSong.js'
import hotSong from '../data/hotSong.js'
import artist from '../data/artist.js'
export default {
  components: {
    singers,
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

<style>
.hotSingers {
  width: 1500px;
  margin: auto;
}
  .singers {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100px;
  }
  .singerName {
    text-align: center;
  }
  .award {
    /* width: 1500px; */
    display: flex;
    margin: auto;
    justify-content: space-around;
    /* width: 150px; */
  }
  hr {
    border: 1.5px solid;
  }
  .list {
    width: 1500px;
    margin: auto;
  }
  .box {
    width: 450px;
    display: flex;
  }
</style>
