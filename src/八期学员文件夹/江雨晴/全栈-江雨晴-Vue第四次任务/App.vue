<template>
  <div class="background">
    <wyy>
    <template v-slot:artists="{artist}">
      <h3>热门歌手</h3>
      <hr />
      <div class="singerPic">
         <div v-for="(pic, index) of artist" :key="index">
            <img :src="pic.picUrl" :alt="pic.altUrl" width="125px" height="auto"/>
            <div>{{ pic.name }}</div>
         </div>
      </div>
      <hr/>
      <h3>榜单</h3>
      <hr />
    </template>

  <template v-slot:newSong="{newSong}">
      <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{newSong.name}}</div>
                    <div>{{newSong.description}}</div>
                </div>
                <img :src='newSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of newSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
    </template>

    <template v-slot:hotSong="{hotSong}">
         <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{hotSong.name}}</div>
                    <div>{{hotSong.description}}</div>
                </div>
                <img :src='hotSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of hotSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
      </template>

      <template v-slot:originSong='{originSong}'>
         <div class="list" >
            <div class="head">
                <div class="head_text">
                    <div>{{originSong.name}}</div>
                    <div>{{originSong.description}}</div>
                </div>
                <img :src='originSong.coverImgUrl' class="head_pic">
            </div>
            <hr>
            <div v-for='(song,index) of originSong.tracks' :key='index'>
                {{index+1}}&nbsp;-&nbsp;<a href="song.picUrl">{{song.name}}</a>
            </div>
         </div>
      </template>

    </wyy>
  </div>
</template>
<script setup lang="ts">
import wyy from './components/wyy.vue'
</script>
<style scoped>
h3{
  text-align: left;
}
.singerPic{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        text-align: center;
    }
    .lists{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }
    .list{
        width: 400px;
        height: 400px;
        text-align: left;
    }
    .head{
        display: flex;
    }
    .head_text{
        width: 250px;
        height: 135px;
    }
    .head_pic{
        width: 125px;
        height: 125px;
        margin-left: auto;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>
