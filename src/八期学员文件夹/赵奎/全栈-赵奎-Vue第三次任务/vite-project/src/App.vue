<template>
  <model title="热门歌手">
    <div class="low">
      <div v-for="(item, index) in artistData">
        <div class="img">
          <img :src="artistData[index].picUrl">
          <p>{{ artistData[index].name }}</p>
        </div>
      </div>
    </div>
  </model>

  <model title="榜单">
    <div class="low">
      <div v-for="item in listName">
        <model :title="item.title">
          <div class="description">
            <p>{{ item.data.description }}</p>
            <div><img :src="item.data.coverImgUrl"> </div>
          </div>
          <div class="fulls">
            <div v-for="(music, index) in item.data.tracks">
              {{ index + 1 }} - {{ music.name }}
            </div>
          </div>
        </model>
      </div>
    </div>
  </model>
</template>

<script>
import model from "./components/model.vue";
import artist from "./artist.js";
import hotSong from "./hotSong.js";
import newSong from "./newSong.js";
import originSong from "./originSong.js";
export default {
  data() {
    return {
      artistData: artist,
      hotSongData: hotSong,
      newSongData: newSong,
      originSong: originSong,
      listName: [
        { title: "新歌榜", data: newSong },
        { title: "热歌榜", data: hotSong },
        { title: "原创榜", data: originSong }]
    }
  },
  components: {
    model
  }
}
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
}
img {
  width: 85%;
  height: 70%;
}
.low {
  width: 1000px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid;
  border-bottom: 2px solid;
}
.description {
  display: flex;
  width: 333px;
  height: 120px;
}
.description p {
  width: 60%;
  height: 100%;
}
.description div {
  width: 40%;
  height: 100%;
}
.fulls {
  border-top: 2px solid;
}
</style>