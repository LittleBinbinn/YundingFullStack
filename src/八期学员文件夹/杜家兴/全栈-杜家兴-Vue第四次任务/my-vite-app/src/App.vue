<script setup>
import singer from './components/singer.vue'
import song from './components/song.vue'
import artist from '../public/data/artist.js'
import hotSong from '../public/data/hotSong.js'
import newSong from '../public/data/newSong.js'
import originSong from '../public/data/originSong.js'


</script>

<template>
  <div>
    <singer>
      <template v-slot:artist>
        <div class="photo">
          <span v-for="(pic, index) in artist" :key="index">
            <img :src="pic.picUrl" class="one">
            <div class="name">{{ pic.name }}</div>
          </span>
        </div>
      </template>
    </singer>

    <song>
      <template v-slot:hotSong>
        <div class="title">
          <span>
            <span>
              <h2>{{ hotSong.name }}</h2>
              <div class="description">{{ hotSong.description }}</div>
            </span>
            <img :src="hotSong.coverImgUrl" class="two">
            <div class="hr"></div>
          </span>
        </div>
        <div>
          <div class="show" v-for="(song, index) in hotSong.tracks" :key="index">{{ ++index }} -- {{ song.name }}</div>
        </div>
      </template>
      <template v-slot:newSong>
        <div class="title">
          <span>
            <span>
              <h2>{{ newSong.name }}</h2>
              <div class="description">{{ newSong.description }}</div>
            </span>
            <img :src="newSong.coverImgUrl" class="two">
            <div class="hr"></div>
          </span>
        </div>
        <div>
          <div class="show" v-for="(song, index) in newSong.tracks" :key="index">{{ ++index }} -- {{ song.name }}</div>
        </div>
      </template>
      <template v-slot:originSong>
        <div class="title">
          <span>
            <span>
              <h2>{{ originSong.name }}</h2>
              <div class="description">{{ originSong.description }}</div>
            </span>
            <img :src="originSong.coverImgUrl" class="two Two">
            <div class="hr Two"></div>
          </span>
        </div>
        <div>
          <div class="show TWO" v-for="(song, index) in originSong.tracks" :key="index">{{ ++index }} -- {{ song.name }}</div>
        </div>
      </template>
    </song>
  </div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.photo {
  display: flex;
  justify-content: space-between;
}
.one {
  width: 130px;
  height: 100px;
}
.name {
  text-align: center;
}
.two {
  width: 200px;
  height: 200px;
  position: relative;
  left: 50%;
  top: -130px;
}
.description {
  width: 50%;
  line-height: 30px;
}
.hr {
  height: 2px;
  width: 87%;
  background: #000;
  position: relative;
  top: -130px;
}
.show {
  height: 40px;
  font: normal 500 20px "微软雅黑";
  line-height: 40px;
  position: relative;
  top: -120px;
}
.Two {
  top: -160px;
}
.TWO {
  top: -150px;
}
</style>