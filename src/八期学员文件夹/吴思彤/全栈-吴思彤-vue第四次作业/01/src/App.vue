<template>
  <div>
    <sing>
      <template v-slot:part-one>
        <div v-for="(item, index) in artist" :key="item">
          <img :src="artist[index].picUrl" />
          <div>{{ artist[index].name}}</div>
        </div>
      </template>

      <template v-slot:part-two>
        <div class="part">

          <div class="one" style="float: right;">
            <div>{{ newSong.name }}</div>
            <div style="font-size: 9px;" class="top">
              <img :src="newSong.coverImgUrl" />
              <p>{{ newSong.description }}</p>
            </div>
          </div>

          <div class="one">
            <ol>
              <li v-for="(item, index) in  newSong.tracks" :key="item">
                -{{ newSong.tracks[index].name }}
              </li>
            </ol>
          </div>

        </div>

        <div class="part">

          <div class="one" style="float: right;">
            <div>{{ hotSong.name }}</div>
            <div style="font-size: 9px;" class="top">
              <img :src="hotSong.coverImgUrl" />
              <p>{{ hotSong.description }}</p>
            </div>
          </div>

          <div class="one">
            <ol>
              <li v-for="(item, index) in hotSong.tracks" :key="item">
                -{{ hotSong.tracks[index].name }}
              </li>
            </ol>
          </div>

        </div>
        <div class="part">

          <div class="one" style="float: right;">
            <div>{{ originSong.name }}</div>
            <div style="font-size: 8px;" class="top">
              <img :src="originSong.coverImgUrl" />
              <p>{{ originSong.description }}</p>
            </div>
          </div>

          <div class="one">
            <ol>
              <li v-for="(item, index) in originSong.tracks" :key="item">
                -{{ originSong.tracks[index].name }}
              </li>
            </ol>
          </div>

        </div>
      </template>
    </sing>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Artist from '../data/artist'
import NewSong from '../data/newSong'
import HotSong from '../data/hotSong'
import OriginSong from '../data/originSong'
import sing from './components/sing'
const artist = ref(Artist)
const hotSong = ref(HotSong)
const newSong = ref(NewSong)
const originSong = ref(OriginSong)
</script>
<style scoped>
div img{
  width: 55px;
  height: 50px;
}
.top img{
  float: right;
  width: 60px;
  height: 60px;
 
}
.one{
  border-bottom: 2px solid rgba(21, 20, 20, 0.765);
}
.part{
  width: 210px;
}
</style>