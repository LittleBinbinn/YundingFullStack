<template>
  <list title="热门歌手">
    <div class="flex">
      <div v-for="item in artist" :key="item">
        <span class="artist">
          <img :src="item.picUrl" :alt="item.altUrl" />
          <span>{{ item.name }}</span>
        </span>
      </div>
    </div>
  </list>
  <hr />
  <list title="榜单">
    <div class="flex2">
      <song
        :title2="newSong.name"
        :message="newSong.description"
        :picture="newSong.coverImgUrl">
      </song>
      <song :title2="hotSong.name" :message="hotSong.description" :picture="hotSong.coverImgUrl"></song>
      <song :title2="originSong.name" :message="originSong.description" :picture="originSong.coverImgUrl"></song>
    </div>
  </list>
  <hr />
  <div class="flex3">
    <span >
      <div v-for="(item, index) in newSong.tracks">
        {{ index + 1 }} - {{ item.name }}
      </div><hr></span>
    <span><div v-for="(item, index) in hotSong.tracks">
        {{ index + 1 }} - {{ item.name }}
      </div><hr></span>
    <span><div v-for="(item, index) in originSong.tracks">
        {{ index + 1 }} - {{ item.name }}
      </div><hr></span>
  </div>
</template>

<script>
import list from "./components/list.vue";
import artist from "./artist.js";
import hotSong from "./hotSong.js";
import newSong from "./newSong.js";
import originSong from "./originSong.js";
export default {
  components: {
    list,
  },
  data() {
    return {
      artist: artist,
      hotSong: hotSong,
      newSong: newSong,
      originSong: originSong,
    };
  },
};
</script>

<style scoped>
body {
  margin: 10px auto;
  padding: 20px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.flex2 {
  display: flex;
  width: 100%;
  height: 136px;
  justify-content: space-between;
  flex-direction: row;
}
.artist {
  width: 60px;
  display: flex;
  flex-direction: column;
}
.artist span {
  font-size: 20px;
  text-align: center;
}
.flex3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: auto;
}
.flex3 span {
  width: 33%;
  height: 400px;
  text-align: left;
}
</style>