<template>
  <HelloWorld class="mainbody">
    <template v-slot:singer>
      <div class="topsinger">
        <div class="singer" v-for="(item, index) in artist" :key="item">
          <img :src="artist[index].picUrl" alt="" class="artistimg" />
          <div class="name">
            <p>
              {{ artist[index].name }}
            </p>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:list>
      <div class="maxlist">
        <div class="hotsong">
          <div class="hotsong-top">
            <div class="hotsongdisply">
              <p style="font-size: 20px">{{ newSong.name }}</p>
              <p style="font-size: 10px">{{ newSong.description }}</p>
            </div>
            <div class="hotimg">
              <img src="newSong.coverImgUrl" alt="" />
            </div>
          </div>

          <div class="hotlist">
            <ul>
              <li v-for="(item, index) in newSong.tracks" :key="item">
                {{ index + 1 }} {{ newSong.tracks[index].name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="newsong">
          <div class="hotsong-top">
            <div class="hotsongdisply">
              <p style="font-size: 20px">{{ hotSong.name }}</p>
              <p style="font-size: 10px">{{ hotSong.description }}</p>
            </div>
            <div class="hotimg">
              <img src="hotSong.coverImgUrl" alt="" />
            </div>
          </div>

          <div class="hotlist">
            <ul>
              <li v-for="(item, index) in hotSong.tracks" :key="item">
                {{ index + 1 }} {{ hotSong.tracks[index].name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="originsong">
          <div class="hotsong-top">
            <div class="hotsongdisply">
              <p style="font-size: 20px">{{ originSong.name }}</p>
              <p style="font-size: 10px">{{ originSong.description }}</p>
            </div>
            <div class="hotimg">
              <img src="originSong.coverImgUrl" alt="" />
            </div>
          </div>

          <div class="hotlist">
            <ul>
              <li v-for="(item, index) in originSong.tracks" :key="item">
                {{ index + 1 }} {{ originSong.tracks[index].name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </HelloWorld>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import artist from "./data/artist";
import hotSong from "./data/hotSong";
import newSong from "./data/newSong";
import originSong from "./data/originSong";
</script>

<style scoped>
.mainbody {
  justify-content: center;
  width: 650px;
}
.artistimg {
  width: 50px;
  height: 50px;
}
.topsinger {
  display: flex;
  padding-top: 5px;
}
.singer {
  flex: 1;
}
.hotsong {
  width: 200px;
}
.hotsong-top {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 5px;
  border-bottom: 2px solid black;
}
p {
  padding: 0px;
  margin: 0px;
}
.hotsongdisply {
  flex: 3;
}
.hotimg {
  flex: 2;
}
ul,
li {
  list-style: none;
  padding: 0px;
}
.hotlist {
  padding: 5px;
}
.maxlist {
  display: flex;
}
.hotsong,
.originsong,
.newsong {
  flex: 1;
}
</style>
