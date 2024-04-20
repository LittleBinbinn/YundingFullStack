<template>
  <div class="first fir">
    <ListName :title='first'>
      <template v-slot:head>
        <div class="picture">
          <div v-for="list in artist" :key="list">
            <img :src=list.altUrl width="50px">
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="picture">
          <div v-for="list in artist" :key="list" class="name">
            {{ list.name }}
          </div>
        </div>
      </template>
    </ListName>
  </div>
  <div class="first fir">
    <ListName :title="second">
      <template v-slot:head>
        <div class="title">
          <div class="bangdanTitle first">
            <div>
              <div class="oneword">{{ newSong.name }}</div>
              <div class="twoword">{{ newSong.description }}</div>
            </div>
            <div>
              <img :src=newSong.coverImgUrl width="70px">
            </div>
          </div>
          <div class="bangdanTitle first">
            <div>
              <div class="oneword">{{ hotSong.name }}</div>
              <div class="twoword">{{ hotSong.description }}</div>
            </div>
            <div>
              <img :src=hotSong.coverImgUrl width="70px">
            </div>
          </div>
          <div class="bangdanTitle first">
            <div>
              <div class="oneword">{{ originSong.name }}</div>
              <div class="twoword">{{ originSong.description }}</div>
            </div>
            <div>
              <img :src=originSong.coverImgUrl width="70px">
            </div>
          </div>
        </div>
      </template>


      <template v-slot:body>
        <div class="listhead">
          <div class="list">
            <ol class="first">
              <li v-for="list in newSong.tracks" :key="list">{{ list.name }}</li>
            </ol>
          </div>
          <div class="list">
            <ol class="first">
              <li v-for="list in hotSong.tracks" :key="list">{{ list.name }}</li>
            </ol>
          </div>
          <div class="list">
            <ol class="first">
              <li v-for="list in originSong.tracks" :key="list">{{ list.name }}</li>
            </ol>
          </div>
        </div>
      </template>
    </ListName>
  </div>
</template>

<style>
ol{
    list-style-position: inside;
    padding-left: 0;
}
.fir{
  width: 850px;
}
.first{
  border-bottom: 1px solid;
}
.listhead{
  width: 850px;
  display: flex;
  justify-content: space-between;
}
.list{
  width: 250px;
  font-size: 15px;
}
.title{
  width: 850px;
  display: flex;
  justify-content: space-between;
}
.oneword{
font-weight: 900;
}
.twoword{
  font-size: 10px;
  margin-right: 15px;
}
.bangdanTitle{
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.picture {
  width: 850px;
  display: flex;
  justify-content: space-between;
}
.name {
  width: 50px;
  text-align: center;
}
</style>
<script>
import ListName from './components/ListName.vue'
import { artist } from './utils/artist'
import { hotSong } from './utils/hotSong'
import { newSong } from './utils/newSong'
import { originSong } from './utils/originSong'
export default {
  name: 'App',
  components: {
    ListName
  },
  data() {
    return {
      first: '热门歌手',
      second: '榜单',
      artist,
      hotSong,
      newSong,
      originSong
    }
  }
}
</script>