<template>
  <div class="App">
    <h3>热门歌手</h3>
    <div class="singer">
      <singerList v-for="(singer, index) in singerMessage" :key="index">
        <template v-slot:singerName>
          <div class="singerName"> {{ singer.name }}</div>
        </template>

        <template v-slot:singerPic>
          <img v-bind:src="singer.picUrl" class="singerPic">
        </template>

      </singerList>
    </div>

    <div class="rankBox">
      <h3>榜单</h3>
      <div class="ranks">
        <musicRank>
          <template v-slot:title>
            {{ newSong.name }}
          </template>
          <template v-slot:introduction>
            {{ newSong.description}}
          </template>
          <template v-slot:rankPic>
            <img v-bind:src=" newSong.coverImgUrl">
          </template>
          <template v-slot:rank>
            <div v-for="(item, index) in newSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </div>
          </template>
        </musicRank>

        <musicRank>
          <template v-slot:title>
            {{ hotSong.name }}
          </template>
          <template v-slot:introduction>
            {{ hotSong.description }}
          </template>
          <template v-slot:rankPic>
            <img v-bind:src="hotSong.coverImgUrl">
          </template>
          <template v-slot:rank>
            <div v-for=" (item, index) in hotSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </div>
          </template>
        </musicRank>

        <musicRank>
          <template v-slot:title>
            {{ originSong.name }}
          </template>
          <template v-slot:introduction>
            {{ originSong.description }}
          </template>
          <template v-slot:rankPic>
            <img v-bind:src="originSong.coverImgUrl">
          </template>
          <template v-slot:rank>
            <div v-for="(item, index) in originSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </div>
          </template>
        </musicRank>
      </div>
    </div>
  </div>
</template>

<script>
import musicRank from './components/MusicRank.vue'
import singerList from './components/SingerList.vue'
import hotSong from './data/hotSong.js';
import newSong from './data/newSong.js';
import originSong from './data/originSong.js';
import singerMessage from './data/artist.js';

// import ref from 'vue'

export default {
  components: {
    musicRank,
    singerList
  },
  setup() {
    return {
      hotSong,
      newSong,
      originSong,
      singerMessage,
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
.App{
  width: 600px;
  height: 700px;
  margin:auto;
}
.singer {
  width: 600px;
  height: 100px;
  margin: auto;
}
.rankBox{
  width: 600px;
  height: 400px;
  margin: auto;
}
.ranks{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
img{
  width: 100px;
  height: 100px;
  border:none;
}
.singer{
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
/* .per{
  flex:1;
} */
.singerPic{
  margin-top:5px;
  width: 40px;
  height: 40px;
}
.singerName{
  margin-top:5px;
}
</style>
