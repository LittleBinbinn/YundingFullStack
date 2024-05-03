<template>
  <div>
    <allContents>
      <template v-slot:things>
        <div v-for="(item, index) in data.artist1" key="item">
          <img :src="data.artist1[index].picUrl" />
          <div>
            {{ data.artist1[index].name }}
          </div>
        </div>
      </template>

      <template v-slot:songs>
        <div>
          <div class="song1">
            <div>
              <h2>{{ data.newSong1.name }}</h2>
              <p style="font-size: 10px;">{{ data.newSong1.description }}</p>
            </div>
            <img :src="data.newSong1.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in data.newSong1.tracks" key="item">
                -{{ data.newSong1.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

        <div>
          <div class="song1">
            <div>
              <h2>{{ data.hotSong1.name }}</h2>
              <p style="font-size: 10px;">{{ data.hotSong1.description }}</p>
            </div>
            <img :src="data.hotSong1.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in data.hotSong1.tracks" key="item">
                -{{ data.hotSong1.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

        <div>
          <div class="song1">
            <div>
              <h2>{{ data.originSong1.name }}</h2>
              <p style="font-size: 10px;">{{ data.originSong1.description }}</p>
            </div>
            <img :src="data.originSong1.coverImgUrl" />
          </div>
          <div class="song2">
            <ol>
              <li v-for="(item, index) in data.originSong1.tracks" key="item">
                -{{ data.originSong1.tracks[index].name }}
              </li>
            </ol>
          </div>
        </div>

      </template>

    </allContents>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import allContents from './components/allContents.vue';
import artist from './data/artist.js';
import hotSong from './data/hotSong.js';
import newSong from './data/newSong.js';
import originSong from './data/originSong.js';

const data = reactive({
  artist1: artist,
  hotSong1: hotSong,
  newSong1: newSong,
  originSong1: originSong
})
// const artist1 = artist;
// const hotSong1 = hotSong;
// const newSong1 = newSong;
// const originSong1 = originSong;

</script>
<style scoped>
div img {
  width: 52px;
  height: 52px;
}

.song1 {
  width: 250px;
  height: 100px;
  display: flex;
  border-bottom: 2px solid black;
}

.song1 img {
  padding-top: 15px;
  padding-left: 20px;
  width: 70px;
  height: 70px;
}

.song1 h2 {
  padding: 0;
  margin: 0;
}

.song1 p {
  margin: 0;
}

.song2 {
  width: 200px;
  border-bottom: 1px solid black;
}
</style>
