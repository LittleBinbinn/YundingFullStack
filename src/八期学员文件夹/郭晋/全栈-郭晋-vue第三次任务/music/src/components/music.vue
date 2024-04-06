<template>
    <div>
      <list>
        <!-- 歌手列表 --> 
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
  
        <!-- 榜单列表 -->
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
        <li v-for="track in songs.tracks" :key="track.index">{{ track.name }}</li>
      </ul>
      <hr width="100%" color="black" />
    </div> 
</div>
<hr width="100%" color="black" />
</template>


      </list>
    </div>
  </template>
  
  <script>
  import list from "./list.vue"; // 导入 List 组件
  import originSongs from '@/message/originSong.js';
  import newSongs from '@/message/newSong.js';
  import hotSongs from '@/message/hotSong.js';
  import artists from '@/message/artist.js';
  
  export default {
    components: {
      list // 注册 List 组件
    },
    data() {
      return {
        originSongs: originSongs,
        newSongs: newSongs,
        hotSongs: hotSongs,
        artists: artists
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式 */
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
    width: 100px; /* 调整图片的宽度 */
    height: auto; /* 让高度按比例自适应 */
  }
  
  .artist-info {
    margin-top: 5px; /* 调整名字与图片的间距 */
    text-align: center; /* 让名字居中显示 */
  }
  
  .middle{
    display: flex;
    flex-direction: row;
  }
  .songs-img{
    width: 100px; /* 调整图片的宽度 */
    height: auto; /* 让高度按比例自适应 */
  }
 .content-msg{
  width: 100%;
  display: flex;
  position: relative;
justify-content: space-between;
  flex-direction: row;
 }
  </style>
  
  