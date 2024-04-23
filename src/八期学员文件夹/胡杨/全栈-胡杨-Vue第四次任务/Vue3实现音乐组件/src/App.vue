<template>
  <app-header>
    <template v-slot:title>
      <strong style="font-size: larger;">
        热门歌手
      </strong>
    </template>

    <template v-slot:content>
      <div class="artistContent">
        <div v-for="(item,index) in artistData">
          <img :src="artistData[index].picUrl" :alt="artistData[index].altUrl" class="artistImg">
          <br>
          <span>
            &nbsp;&nbsp;{{ artistData[index].name }}
          </span>
        </div>
      </div>
    </template>
  </app-header>

  <app-header>
    <template v-slot:title>
      <strong style="font-size: larger;">
        榜单
      </strong>
    </template>

    <template v-slot:content> 
      <div class="songsContent">
        <div v-for="(item,index1) in list">
        <div class="titles">
          <div>
            <strong style="font-size: larger;">
              {{ item.title }}
            </strong>
            <p style="width: 200px;font-size: smaller;">
              {{ item.songs.description }}
            </p>
          </div>
          <div>
            <img :src="item
              .songs.coverImgUrl" class="coverImg">
          </div>
        </div>
        <app-header>
          <template v-slot:content>
            <div v-for="(item,index) in list[index1].songs.tracks">
              {{ index+1 }}-{{ item.name }}
            </div>
          </template>
        </app-header>
      </div>
      </div>
    </template>
  </app-header>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import artist from './artist';
import hotSong from './hotSong';
import newSong from './newSong';
import originSong from './originSong';

const artistData = artist
const hotSongData = hotSong
const newSongData = newSong
const originSongData = originSong
const list = [
    { title: "新歌榜", songs: newSong },
    { title: "热歌榜", songs: hotSong },
    { title: "原创榜", songs: originSong }
]

</script>
<style scoped>
  .artistImg{
    width: 80px;
    height: 80px;
  }
  .artistContent{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .songsContent{
    widows: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .coverImg{
    position: relative;
    width: 130px;
    height: 130px;
    left: 90px;
  }
  .titles{
    display: flex;
    width: 440px;
  }
</style>
