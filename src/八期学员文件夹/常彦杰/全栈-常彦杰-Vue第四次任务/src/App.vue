<template>
  <div id="app">
    <common>
      <template #title>
        <h2>热门歌手</h2>
      </template>
      <template #data>
        <span v-for="item in artist" :key="item.name">
          <img :src=item.picUrl :alt=item.altUrl style="height: 100px; width: auto;">
          <div>{{ item.name }}</div>
        </span>
      </template>
    </common>
    <div></div>
    <common>
      <template #title>
        <h2>榜单</h2>
      </template>
      <template #data>
        <span >
          <songTop>
            <template #title>
              <h2>{{ newSong.name }}</h2>
            </template>
            <template #description>
              <span>{{ newSong.description }}</span>
            </template>
            <template #img>
              <img :src=newSong.coverImgUrl style="height: 100px; width: auto;">
            </template>
            <template #data>
              <span v-for="(item,index) in newSong.tracks" :key="index" style="width: 300px;">
                {{ index+1 }}-{{ item.name }} <img :src=item.picUrl style="height: 50px; width: auto; float: right;">
              </span>
            </template>
          </songTop>
        </span>
        <span >
          <songTop>
            <template #title>
              <h2>{{ hotSong.name }}</h2>
            </template>
            <template #description>
              <span>{{ hotSong.description }}</span>
            </template>
            <template #img>
              <img :src=hotSong.coverImgUrl style="height: 100px; width: auto;">
            </template>
            <template #data>
              <span v-for="(item,index) in hotSong.tracks" :key="index" style="width: 300px;">
                {{ index+1 }}-{{ item.name }} <img :src=item.picUrl style="height: 50px; width: auto; float: right;">
              </span>
            </template>
          </songTop>
        </span>
        <span >
          <songTop>
            <template #title>
              <h2>{{ originSong.name }}</h2>
            </template>
            <template #description>
              <span>{{ originSong.description }}</span>
            </template>
            <template #img>
              <img :src=originSong.coverImgUrl style="height: 100px; width: auto;">
            </template>
            <template #data>
              <span v-for="(item,index) in originSong.tracks" :key="index" style="width: 300px;">
                {{ index+1 }}-{{ item.name }} <img :src=item.picUrl style="height: 50px; width: auto; float: right;">
              </span>
            </template>
          </songTop>
        </span>
      </template>
    </common>
  </div>
</template>

<script setup>
import artist from '../data/artist'
import hotSong from '../data/hotSong'
import newSong from '../data/newSong'
import originSong from '../data/originSong'
import common from './components/common-components.vue'
import songTop from './components/song-top.vue'
</script>

<style scoped>

</style>
