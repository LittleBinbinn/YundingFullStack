<template>
  <div id="app">
    <!-- 热门歌手 -->

    <h1>热门歌手</h1>
    <div class="artist">
      <artist-list v-for="(artist,index) in artists" :key="index" :artist="artist">
        <!-- 歌手图片 -->
        <template v-slot:artistImg>
          <img :src="artist.picUrl" class="artistImg">
        </template>

        <!-- 歌手名字 -->
        <template v-slot:artistName>
          <div class="artistName"> {{ artist.name }} </div>
        </template>
      </artist-list>
    </div>

    <!-- 榜单 -->
    <h1 class="rankList">榜单</h1>
      <div class="music">
        <!-- 新歌榜 -->
        <music-rank>
            <template v-slot:title>
              <h2> {{ newSong.name }}</h2>
            </template>
            
            <template v-slot:intro>
              <p> {{ newSong.description }}</p>
            </template>

          <template v-slot:pic>
            <img :src="newSong.coverImgUrl" class="coverImg">
          </template>

          <template v-slot:content>
            <li v-for="(item,index) in newSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </li>
          </template>
        </music-rank>
      
        <!-- 热歌榜 -->
        <music-rank>
          <template v-slot:title>
            <h2> {{ hotSong.name }}</h2>
          </template>
          <template v-slot:intro>
            <p> {{ hotSong.description }}</p>
          </template>
          <template v-slot:pic>
            <img :src="hotSong.coverImgUrl" class="coverImg">
          </template>
          <template v-slot:content>
            <li v-for="(item,index) in hotSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </li>
          </template>
        </music-rank>
      
        <!-- 原创榜 -->
        <music-rank>
          <template v-slot:title>
            <h2> {{ originSong.name }}</h2>
          </template>
          <template v-slot:intro>
            <p> {{ originSong.description }}</p>
          </template>
          <template v-slot:pic>
            <img :src="originSong.coverImgUrl" class="coverImg">
          </template>
          <template v-slot:content>
            <li v-for="(item,index) in originSong.tracks" :key="index">
              {{ index + 1 }} - {{ item.name }}
            </li>
          </template>
        </music-rank>
      </div>
    </div>
</template>

<script>
  import ArtistList from "./components/ArtistList.vue"
  import MusicRank from "./components/MusicRank.vue"
  import artists from "./data/artist.js"
  import hotSong from "./data/hotSong.js"
  import newSong from "./data/newSong.js"
  import originSong from "./data/originSong.js"


  export default {
    components: {
      ArtistList,
      MusicRank
    },
    data() {
      return {
        artists,
        hotSong,
        newSong,
        originSong
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .artist {
    display: flex;
    justify-content:space-between;
    width: 1960px;
    height: 180px;
    border-top: 3px solid #000;
    border-bottom: 1px solid #000;
    text-align: center;
  }
  .artistImg {
    margin-top: 10px;
    width: 120px;
    height: 120px;
  }

  .artistName {
    margin-top: 10px;
    font-size: 18px;
  }

  .rankList {
    margin-top: 16px;
  }
  .music {
    display: flex;
    justify-content: space-between;
    height: 700px;
    border-top: 3px solid #000;
    border-bottom: 1px solid #959595;
  }
  
  .coverImg {
    width: 140px;
    height: 140px;
  }

  li {
    font-size: 26px;
    list-style:  none;
  }
</style>