<template>
  <div >
    <musicFrame>
      <template #top>
        <h1>热门歌手</h1>
        <!-- <hr width="100%" color="black" class="hr-one" /> -->
      </template>
      <template #bottom>
        <ul class="info">
          <li v-for="artist in artists" :key="artist.name" class="info-eg">
            <div>
              <img :src="artist.picUrl" alt="Artist Image" class="artist-image">
              <div class="artist-name">
                <span>{{ artist.name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </musicFrame>

    <musicFrame>
      <template #top>
        <h1>榜单</h1>
      </template>
      <template #bottom>
        <div class="list">
          <musicFrame class="songslist">
            <template #top>
              <songs :title="newSongs.name" :songText="newSongs.description" :songImg="newSongs.coverImgUrl"></songs>
            </template>
            <template #bottom>
              <ul>
                <li v-for="(newsong,index) in newSongs.tracks" :key="index" class="namelist">
                  {{ index+1 }} - {{ newsong.name }}
                </li>
              </ul>
            </template>
          </musicFrame>
          <musicFrame class="songslist">
            <template #top>
              <songs :title="hotSongs.name" :songText="hotSongs.description" :songImg="hotSongs.coverImgUrl"></songs>
            </template>
            <template #bottom>
              <ul>
                <li v-for="(hotsong, index) in hotSongs.tracks" :key="index" class="namelist">
                  {{ index + 1 }} - {{ hotsong.name }}
                </li>
              </ul>
            </template>
          </musicFrame>
          <musicFrame class="songslist">
            <template #top>
              <songs :title="originSongs.name" :songText="originSongs.description" :songImg="originSongs.coverImgUrl">
              </songs>
            </template>
            <template #bottom>
              <ul>
                <li v-for="(originsong, index) in originSongs.tracks" :key="index" class="namelist">
                  {{ index + 1 }} - {{ originsong.name }}
                </li>
              </ul>
            </template>
          </musicFrame>
        </div>
      </template>
    </musicFrame>
  </div>
</template>

<script>
import musicFrame from './components/musicFrame.vue'
import artists from './data/artist'
import hotSongs from './data/hotSong'
import newSongs from './data/newSong'
import originSongs from './data/originSong'
import songs from './components/songs.vue'
export default {
  components: {
    musicFrame,
    songs
  },
  data () {
    return {
      artists: artists,
      hotSongs: hotSongs,
      newSongs: newSongs,
      originSongs: originSongs
    }
  }
  
}
</script>

<style>

.info{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
}
.info-eg{
  width: 100%;
}
.artist-image{
  width:120px;
  height:100px;
  margin-left: 25px;
}
.artist-name{
  text-align: center;
}
.list{
  display: flex;
}
.songslist{
  width:33.33%
}
.namelist{
  list-style: none;
  margin-left: -30px;
}
</style>