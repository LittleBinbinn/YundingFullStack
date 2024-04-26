<template>
  <div class="app">
    <MusicList>
      <template #header>
        <h1>热门歌手</h1>
        <header>
          <div class="header">
            <ul>
              <li v-for="singer in artistList" :key="singer"><img :src="singer.picUrl" :alt="singer.altUrl"></li>
            </ul>
            <ul>
              <li v-for="singer in artistList" :key="singer">{{ singer.name }}</li>
            </ul>
          </div>
        </header>
        <h1>榜单</h1>
      </template>
    </MusicList>
    <main>
      <div class="main">
        <MusicList>
          <template #main>
            <ul>
              <div>
                <section>
                  <h1>{{ newSongList.name }}</h1>
                  <p>{{ newSongList.description }}</p>
                </section>
                <section>
                  <img :src="newSongList.coverImgUrl">
                </section>
              </div>
              <div>
                <li v-for="(newSong, index) in newSongList.tracks" :key="index"><a :href="newSong.picUrl">{{ index + 1
                    }}-{{
                    newSong.name }}</a>
                </li>
              </div>
            </ul>
          </template>
        </MusicList>
        <MusicList>
          <template #main>
            <ul>
              <div>
                <section>
                  <h1>{{ hotSongList.name }}</h1>
                  <p>{{ hotSongList.description }}</p>
                </section>
                <section>
                  <img :src="hotSongList.coverImgUrl">
                </section>
              </div>
              <div>
                <li v-for="(hotSong, index) in hotSongList.tracks" :key="index"><a :href="hotSong.picUrl">{{ index + 1
                    }}-{{
                    hotSong.name }}</a>
                </li>
              </div>
            </ul>
          </template>
        </MusicList>
        <MusicList>
          <template #main>
            <ul>
              <div>
                <section>
                  <h1>{{ originSongList.name }}</h1>
                  <p>{{ originSongList.description }}</p>
                </section>
                <section>
                  <img :src="originSongList.coverImgUrl">
                </section>
              </div>
              <div>
                <li v-for="(originSong, index) in originSongList.tracks" :key="index"><a :href="originSong.picUrl">{{
                index
                + 1 }}-{{
                originSong.name }}</a>
                </li>
              </div>
            </ul>
          </template>
        </MusicList>
      </div>
    </main>
  </div>
</template>

<script setup>
import hotSongList from '../../static/data/hotSong.js'
import newSongList from '../../static/data/newSong.js'
import originSongList from '../../static/data/originSong.js'
import artistList from '../../static/data/artist.js'
import MusicList from './MusicList.vue'
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
    } 
    .app {
      position: absolute;
      width: 80%;
      left: 10%;
    }
    .header {
      border-top: 4px solid black;
      border-bottom: 2px solid black;
    }
    .header ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .header ul li {
      padding: 2px;
      flex: 1;
      text-align: center;
    }
    .header img {
      width: 80px;
      height: 80px;
    }
    .header {
      width: 100%;
      border-top: 4px solid black;
      border-bottom: 2px solid black;
    }
    .main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 4px solid black;
      border-bottom: 2px solid black;
    }
    .main ul {
      flex: 1;
      margin: 5px;
    }
    .main ul div:first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .main ul section {
      margin: 5px;
    }
    .main img {
      position: relative;
      top: 4px;
      width: 110px;
    }
    .main ul div:last-child {
      display: flex;
      flex-direction: column;
      border-top: 4px solid black;
      border-bottom: 2px solid black;
    }
    .main ul li {
      text-align: left;
      padding: 2px;
      flex: 1;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    a:active {
      color: #000;
    }
</style>