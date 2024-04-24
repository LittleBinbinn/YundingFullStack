<template>
  <div>
    <allContents>
      <template v-slot:things>
        <div v-for="(item, index) in artist" key="item">
          <img :src="artist[index].picUrl" />
          <div>
            {{ artist[index].name }}
          </div>
        </div>
      </template>

      <template v-slot:songs>
        <div>
          <div class="song1">
            <div>
              <h2>{{ newSong.name }}</h2>
              <p style="font-size: 10px;">{{ newSong.description }}</p>
            </div>
            <img :src="newSong.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in newSong.tracks" key="item">
                -{{ newSong.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

        <div>
          <div class="song1">
            <div>
              <h2>{{ hotSong.name }}</h2>
              <p style="font-size: 10px;">{{ hotSong.description }}</p>
            </div>
            <img :src="hotSong.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in hotSong.tracks" key="item">
                -{{ hotSong.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

        <div>
          <div class="song1">
            <div>
              <h2>{{ originSong.name }}</h2>
              <p style="font-size: 10px;">{{ originSong.description }}</p>
            </div>
            <img :src="originSong.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in originSong.tracks" key="item">
                -{{ originSong.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

      </template>

    </allContents>
  </div>
</template>
<script>
import allContents from './components/allContents.vue';
import artist from './data/artist.js';
import hotSong from './data/hotSong.js';
import newSong from './data/newSong.js';
import originSong from './data/originSong.js';
export default {
  data() {
    return {
      artist: artist,
      hotSong: hotSong,
      newSong: newSong,
      originSong: originSong
    }
  },
  components: {
    allContents
  },

}
</script>
<style scoped>
  div img {
    width:52px;
    height:52px;
  }
  .song1 {
    width:250px;
    height:100px;
    display: flex;
    border-bottom: 2px solid black;
  }
  .song1 img {
    padding-top: 15px;
    padding-left: 20px;
    width:70px;
    height:70px;
  }
  .song1 h2 {
    padding: 0;
    margin:0;
  }
  .song1 p {
    margin:0;
  }
  .song2 {
    width: 200px;
    border-bottom: 1px solid black;
  }
</style>
