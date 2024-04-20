<template>
    <div>
      <lists>
        <template v-slot:artistList>
          <h1>热门歌手</h1>
          <hr width="100%" color="black" />
          <ul class="artist-list">
            <li v-for="artist in artists" :key="artist.name" class="artist-item">
              <div class="artist-wrapper">
                <img :src="artist.picUrl" alt="Artist Image" class="artist-image">
                <div class="artist-info">
                  <span>{{ artist.name }}</span>
                </div>
              </div>
            </li>
          </ul>
        </template>
  
        <template v-slot:songsList>
          <div>
            <h1>榜单</h1>
            <hr width="100%" color="black" />
            <div class="middle">
              <div v-for="(songs, index) in [originSongs, newSongs, hotSongs]" :key="index">
                <h2>{{ songs.name }}</h2>
                <p>{{ songs.description }}</p>
                <img :src="songs.coverImgUrl" alt="song_img" class="songs-img">
                <hr width="90%" color="black" />
              </div>
            </div>
          </div>
        </template>
        <template v-slot:content>
          <div class="content-msg">
            <div v-for="(songs, index) in [originSongs, newSongs, hotSongs]" :key="index" class="column">
              <h2>{{ songs.name }}</h2>
              <ul>
                <li v-for="(track, index) in songs.tracks" :key="index">{{ track.name }}</li>
              </ul>
              <hr width="100%" color="black" />
            </div> 
          </div>
          <hr width="100%" color="black" />
        </template>
      </lists>
    </div>
  </template>
  
  <script>
  import lists from "./lists.vue"; 
  import { ref } from 'vue'; 
  
  import originSongs from '@/message/originSong.js';
  import newSongs from '@/message/newSong.js';
  import hotSongs from '@/message/hotSong.js';
  import artists from '@/message/artist.js';
  
  export default {
    components: {
      lists 
    },
    setup() {
      const originSongsRef = ref(originSongs);
      const newSongsRef = ref(newSongs);
      const hotSongsRef = ref(hotSongs);
      const artistsRef = ref(artists);
  
  
      return {
        originSongs: originSongsRef,
        newSongs: newSongsRef,
        hotSongs: hotSongsRef,
        artists: artistsRef
      }
    }
  }
  </script>
  
  <style scoped>
  .artist-list {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  
  .artist-item {
    margin-bottom: 20px;
  }
  
  .artist-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .artist-image {
    width: 100px; 
    height: auto; 
  }
  
  .artist-info {
    margin-top: 5px; 
    text-align: center; 
  }
  
  .middle{
    display: flex;
    flex-direction: row;
  }
  .songs-img{
    width: 100px; 
    height: auto; 
  }
  .content-msg{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
  }
  </style>
  