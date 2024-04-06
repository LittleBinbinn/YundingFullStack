<template>
  <div class="app">
    <div class="hotsinger">
      <strong>热门歌手</strong>
    </div>
    <show-message :art="art">
      <template v-slot:top="topart">
        <div class="top">
          <img :src="topart.item.picUrl" :alt="topart.item.altUrl" class="artpic">
          <div>{{ topart.item.name }}</div>
        </div>
      </template>
    </show-message>
    <div class="list">
      <strong>榜单</strong>
    </div>
    <show-message :art="art">
      <template v-slot:mid v-show="true">
        <div class="a">
          <div class="new">
            <div class="newl">
              <h3>{{newsong.name}}</h3>
              <div>
                {{newsong.description}}
              </div>
            </div>
            <img :src="newsong.coverImgUrl" alt="">

          </div>
          <li v-for="(item,index) in newsong.tracks">
            {{ index+1 }}-{{ item.name }}
          </li>
        </div>
        <div class="a">
          <div class="new">
            <div class="newl">
              <h3>{{ hotsong.name }}</h3>
              <div>
                {{ hotsong.description }}
              </div>
            </div>
            <img :src="hotsong.coverImgUrl" alt="">
          </div>
          <li v-for="(item, index) in hotsong.tracks">
            {{ index + 1 }}-{{ item.name }}
          </li>
        </div>
        <div class="a">
          <div class="new">
            <div class="newl">
              <h3>{{ originsong.name }}</h3>
              <div>
                {{ originsong.description }}
              </div>
            </div>
            <img :src="originsong.coverImgUrl" alt="">
          </div>
          <li v-for="(item, index) in originsong.tracks">
            {{ index + 1 }}-{{ item.name }}
          </li>
        </div>

      </template>
    </show-message>






  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
import { Topdata } from './data/artist';
import { Hotdata } from './data/hotSong';
import { Origindata } from './data/originSong';
import { Newdata } from './data/newSong';
  export default {
  components: {
      ShowMessage
  },
  data() {
    return {
      art: Topdata(),
      hotsong: Hotdata(),
      originsong: Origindata(),
      newsong:  Newdata()
      
    }
  },
  created() {
    console.log(this.art, this.hotsong, this.originsong, this.newsong);
  }
    
  }
</script>

<style  scoped>
li{
  list-style: none;
}
*{
  padding: 0;
}
.hotsinger{
  border-bottom: 2px solid black;
  font-size: 25px;
}
.app{
  width: 1000px;
}
  .top{
    height: 90px;
    width: 55px;
  }
  .top img{
    height:60px;
    width: 55px;
  }
  .top div{
    text-align: center;
    height: 20px;
  }
  .list{
    border-bottom: 2px solid black;
    font-size: 25px;
    margin-top: 10px;
  }
  .new{
    display: flex;
    width: 300px;
    border-bottom: 2px solid black;
    margin-top: -2px;

  }
  .new img{
    width: 100px;
    height: 100px;
  }
  .newl div{
    font-size: 10px;
    color:gray;
  }
  .newl h3{
    height: 20px;
    margin-top: -5px;
  }
  .a{
    border-bottom:2px solid black ;
  }
  
</style>