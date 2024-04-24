<template>
<div class="app">
  <!-- ***********热门歌手**************** -->
  <div class="hotsingers">
    <h2>热门歌手</h2>
    
    <div class="singercontainer">
      <music-singer
      v-for="(singer,index) in artist"
      :key="index"
      >
      <template v-slot:SingerPhoto>
        <div class="SinerPhoto">
          <img
          v-bind:src="singer.picUrl"
        </div>
      </template>

      <template v-slot:singerName>
          <div class="singerName"> {{ singer.name }}</div>
        </template>
    
    </music-singer>
    </div>
  </div>
<!-- ************************************ -->

  <div class="musicchart">
    <h2>榜单</h2>
    <div class="introduction">
      <music-song>
        <template v-slot:ListName
        :class="ListName">
        <div class="ListName">
          {{ newSong.name }}
        </div>
          
        </template>
        <template v-slot:Listintroduction>
          <div class="Listintroduction">
            {{ newSong.description }}
          </div>
        </template>
        <template
        v-slot:desPic
        >
        <div class="listPic">
          <img
          v-bind:src="newSong.coverImgUrl"
        </div>
        </template>
        <template 
        v-slot:song
        >
        <div v-for="(song ,index ) in newSong.tracks"
        :key="index"
          > {{ index+1 }}-{{song.name  }}</div>
        </template>
        
      </music-song>
      <!--  -->
      <music-song>
        <template v-slot:ListName>
          <div class="ListName">{{ hotSong.name }}</div>
          
        </template>
        <template v-slot:Listintroduction>
          <div class="Listintroduction">
            {{ hotSong.description }}
          </div>
          
        </template>
        <template
        v-slot:desPic
        >
        <div class="listPic">
          <img
          v-bind:src="hotSong.coverImgUrl"
        </div>
        </template>
        <template 
        v-slot:song
        >
        <div v-for="(song ,index ) in hotSong.tracks"
        :key="index"
          > {{ index+1 }}-{{song.name  }}</div>
        </template>
        
      </music-song>
      <!--  -->
      <music-song>
        <template v-slot:ListName>
          <div class="ListName">{{ originSong.name }}</div>
          
        </template>
        <template v-slot:Listintroduction>
          <div class="Listintroduction">
            {{ originSong.description }}
          </div>
        </template>
        <template
        v-slot:desPic
        >
        <div class="listPic">
          <img
          v-bind:src="originSong.coverImgUrl"
        </div>
        </template>
        <template 
        v-slot:song
        >
        <div v-for="(song ,index ) in originSong.tracks"
        :key="index"
          > {{ index+1 }}-{{song.name  }}</div>
        </template>
        
      </music-song>
    </div>
    
    
  </div>



</div>

  
</template>
<script>
import MusicSinger from './components/MusicSinger.vue'
import MusicSong from './components/MusicSong.vue'
import hotSong from '../data/hotSong.js'
import newSong from '../data/newSong.js';
import originSong from '../data/originSong.js';
import artist from '../data/artist.js';

export default
  {
    components: {
      MusicSinger,
      MusicSong
    },
    data() {
      return {
        hotSong,
        newSong,
        originSong,
        artist
    }
  }
}
</script>
<style scoped>
img{
  width: 90px;
  height: 90px;
}
.singercontainer{
  width: 1000px;
  height: 130px;
  display: flex;
  margin: px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom:  4px solid black;
  border-top:  4px solid black;
  text-align: center;
}
.SinerPhoto{
  margin-top: 10px;
}

.introduction{
  width: 1000px;
  height: 380px;
  border-bottom:  4px solid black;
  border-top:  4px solid black;
  display: flex;
  justify-content: space-between;
  margin-top: -15px;
  flex-direction: row;
}



</style>