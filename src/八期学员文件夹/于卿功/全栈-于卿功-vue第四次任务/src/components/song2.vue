<script setup>
import hotSong from "../hotSong.js";
import newSong from "../newSong.js";
import originSong from "../originSong.js";
let title = newSong;
</script>

<template>
  <div class="bbb">
    <div class="flex">
      <div class="flex2">
        <div class="box">
          <h2>{{ title.name }}</h2>
          <p>{{ title.description }}</p>
        </div>
        <img :src="title.coverImgUrl" alt="" />
      </div>
      <div class="songs">
        <ul v-for="(item, index) in title.tracks" :key="index">
          <li>{{ index + 1 }}-{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="flex">
      <div class="flex2">
        <div class="box">
          <h2>{{ hotSong.name }}</h2>
          <p>{{ hotSong.description }}</p>
        </div>
        <img :src="hotSong.coverImgUrl" alt="" />
      </div>
      <div class="songs">
        <ul v-for="(item, index) in hotSong.tracks" :key="index">
          <li>{{ index + 1 }}-{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="flex">
      <div class="flex2">
        <div class="box">
          <h2>{{ originSong.name }}</h2>
          <p>{{ originSong.description }}</p>
        </div>
        <img :src="originSong.coverImgUrl" alt="" />
      </div>
      <div class="songs">
        <ul v-for="(item, index) in originSong.tracks" :key="index">
          <li>{{ index + 1 }}-{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bbb {
  display: flex;
}
.flex {
  width: 30%;
  height: 800px;
  display: flex;
  flex-direction: column;
}
.flex2 {
  display: flex;
}
.flex img {
  width: 100px;
  height: 100px;
}
.box {
  margin: 10px;
  padding: 10px;
}
.songs {
  flex: 2;
}
li {
  list-style: none;
}
</style>