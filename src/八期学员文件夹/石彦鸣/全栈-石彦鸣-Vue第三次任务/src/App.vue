<script>
import artist from "../data/artist.js";
import hotSong from "../data/hotSong.js";
import newSong from "../data/newSong.js";
import originSong from "../data/originSong.js";
import list from "./components/list.vue";
export default {
  data() {
    return {
      artistData: artist,
      hotSongData: hotSong,
      newSongData: newSong,
      originSong: originSong,
      listName: [{ title: "新歌榜", data: newSong }, { title: "热歌榜", data: hotSong }, { title: "原创榜", data: originSong }]
    }
  },
  components: {
    list
  }
}
</script>

<template>
  <list title="热门歌手">
    <div class="flex">
      <div v-for="(item, index) in artistData">
        <div class="img">
          <img :src="artistData[index].picUrl">
          <p>{{ artistData[index].name }}</p>
        </div>
      </div>
    </div>
  </list>
  <list title="榜单">
    <div class="flex">
      <div v-for="item in listName">
        <list :title="item.title">
          <div class="description">
            <p>{{ item.data.description }}</p>
            <div><img :src="item.data.coverImgUrl"> </div>
          </div>
          <div class="tracks">
            <div v-for="(track, index) in item.data.tracks">
              {{ index + 1 }} - {{ track.name }}
            </div>
          </div>
        </list>
      </div>
    </div>
  </list>
</template>

<style scoped>
.img {
  width: 100px;
  height: 100px;
}

img {
  width: 70%;
  height: 70%;
}

.flex {
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

.description>p {
  width: 60%;
  height: 100%;
}

.description>div {
  width: 40%;
  height: 100%;
}

.tracks {
  border-top: 2px solid;
  border-bottom: 2px solid;
}
</style>
