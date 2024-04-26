<script setup>
import MusicBox from './components/MusicBox.vue'
import artist from './data/artist.js'
import newSong from './data/newSong.js'
import hotSong from './data/hotSong.js'
import originSong from './data/originSong.js'
</script>

<template>
  <MusicBox :artist="artist" :newSong="newSong" :hotSong="hotSong" :originSong="originSong"></MusicBox>
</template>

<style scoped lang="scss">

</style>
