<script setup>
import Transition from './components/transition.vue'
import { Infor } from '../infor/artist.js'
import { hotSong } from '../infor/hotSong.js'
import { newSong } from '../infor/newSong.js'
import { originSong } from '../infor/originSong.js'
</script>

<template>
  <!-- 热门歌手 -->
  <div id="singer-nav">热门歌手</div>
  <div id="singer-img" width="1280px" height="240px">
    <div id="disflex">
      <Transition v-for="item in Infor">
        <template #default>
          <div id="singer-img">
            <img :src="item.picUrl" width="100px" height="180px" id="pppp" />
            <div id="singer-img-border">{{ item.name }}</div>
          </div>
        </template>
      </Transition>
    </div>
  </div>
  <!-- 榜单 -->
  <!-- 新歌榜单 -->
  <div id="below-flex">
    <!-- <div id="below">榜单</div> -->
    <Transition>
      <div width="300px" height="300px" id="one">
        <div id="menu">
          <div class="singStyle-nav">{{ hotSong.name }}</div>

          <img :src="hotSong.coverImgUrl" height="100px" id="uuu" />

          <div class="ooo" id="iiii">{{ hotSong.description }}</div>
        </div>
        <div v-for="(newSongTrack, index) in newSong.tracks" class="touchEffect">
          {{ index + 1 }}
          <img :src="newSongTrack.picUrl" width="20px" height="20px" />
          {{ newSongTrack.name }}
        </div>
      </div>
    </Transition>
    <!-- 热歌榜单 -->
    <Transition>
      <div width="300px" height="300px" id="two">
        <div id="menu">
          <div class="singStyle-nav">{{ newSong.name }}</div>
          <img :src="newSong.coverImgUrl" width="100px" height="100px" id="uuu" />
          <div id="iiii">{{ newSong.description }}</div>
        </div>
        <div v-for="(hotSongTrack, index) in hotSong.tracks" class="touchEffect">
          {{ index + 1 }}
          <img :src="hotSongTrack.picUrl" width="20px" height="20px" />
          {{ hotSongTrack.name }}
        </div>
      </div>
    </Transition>
    <!-- 原创榜单 -->
    <Transition>
      <div width="300px" height="300px" id="three">
        <div id="menu">
          <div class="singStyle-nav">{{ originSong.name }}</div>
          <img :src="originSong.coverImgUrl" width="100px" height="100px" id="uuu" />
          <div id="iiii">{{ originSong.description }}</div>
        </div>
        <div v-for="(originSongTrack, index) in originSong.tracks" class="touchEffect">
          {{ index + 1 }}
          <img :src="originSongTrack.picUrl" width="20px" height="20px" />
          {{ originSongTrack.name }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
* {
  margin: 0 auto;
}
#singer-nav {
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  font-weight: 900;
}
#disflex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#singer-img-border {
  position: relative;
  text-align: center;
  margin: 0 auto;
  border-bottom: 3px solid black;
}

#below-flex {
  display: flex;
}
.singStyle-nav {
  font-weight: 900;
}

.touchEffect:hover {
  background-color: antiquewhite;
}
#singer-img {
  perspective: 200px;
}
#pppp:hover {
  transition: 0.2s;
  transition-timing-function: linear;
  transform: translateZ(50px);
}
#one,
#two,
#three {
  flex: 1;
  border-bottom: 3px solid black;
}
#uuu {
  position: relative;
  left: 164px;
  top: 29px;
  /* border-bottom: 1px solid black; */
}
#iiii {
  position: relative;
  width: 150px;
  left: -131px;
  top: -80px;
  /* border-bottom: 1px solid black; */
}
/* #abc {
  width: 200px;
} */
/* #uuu,
#iiii {
  width: 100px;
} */
#menu {
  height: 220px;
  border-bottom: 3px solid black;
}
</style>
