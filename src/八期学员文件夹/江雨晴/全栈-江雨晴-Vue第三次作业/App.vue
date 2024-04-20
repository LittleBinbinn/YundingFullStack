<template>
  <div>
    <wyy>

      <template scope="artist" slot='artists'>
         <h3>热门歌手</h3>
         <hr />
         <div class="singerPic">
         <div v-for="(pic, index) of artist.artist" :key="index">
          <img
            :src="pic.picUrl"
            :alt="pic.altUrl"
            width="125px"
            height="auto"
          />
          <div>{{ pic.name }}</div>
         </div>
         </div>
         <hr />
         <h3>榜单</h3>
         <hr />
      </template>

      <template scope="newSong" slot='newSong'>
         <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{newSong.newSong.name}}</div>
                    <div>{{newSong.newSong.description}}</div>
                </div>
                <img :src='newSong.newSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of newSong.newSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
      </template>

      <template scope='hotSong' slot="hotSong">
         <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{hotSong.hotSong.name}}</div>
                    <div>{{hotSong.hotSong.description}}</div>
                </div>
                <img :src='hotSong.hotSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of hotSong.hotSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
      </template>

      <template scope='originSong' slot='originSong'>
         <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{originSong.originSong.name}}</div>
                    <div>{{originSong.originSong.description}}</div>
                </div>
                <img :src='originSong.originSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of originSong.originSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
      </template>
      
    </wyy>
  </div>
</template>
<script>
import wyy from "./components/wyy.vue";
export default {
  name: "App",
  components: { wyy },
};
</script>
