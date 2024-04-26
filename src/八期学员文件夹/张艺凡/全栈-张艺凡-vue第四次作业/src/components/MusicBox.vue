<template>
  <div>
    <div class="title">热门歌手</div>
    <div class="artist-box">
      <div v-for="item in artist" class="artist-item">
        <div class="artist-item-img">
          <img :src="item.picUrl" alt="" />
        </div>
        <div class="artist-item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <div>
    <div class="title">榜单</div>
    <div class="bill-box">
      <div v-for="board in allBoard" class="bill-item">
        <div class="title-box">
          <div class="title-text">
            <div class="bill-title">{{ board.name }}</div>
            <div class="info">{{ board.description }}</div>
          </div>
          <div class="title-bg">
            <img class="cover" :src="board.coverImgUrl" alt="">
          </div>
        </div>
        <div class="music-list-box">
          <div class="music-list-item" v-for="(song, index) in board.tracks">
            {{ index + 1 }} - {{ song.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['artist', 'newSong', 'hotSong', 'originSong'])
const allBoard = ref([props.newSong, props.hotSong, props.originSong]);
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid;
  padding-top: 20px;
}
.artist-box {
  display: flex;
  border-bottom: 1px solid;
  .artist-item {
    padding: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    .artist-item-img {
      width: 70px;
      height: 70px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.bill-box {
  display: flex;
  .bill-item {
    flex: 1;
    padding: 10px;
    .bill-title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .title-box {
    display: flex;
    border-bottom: 1px solid;
    padding-bottom: 8px;
    .title-text {
      margin-right: 20px;
    }
    .info {
      font-size: 12px;
      color: #666;
    }
    .title-bg {
      width: 100px;
      height: 100px;
      background: #eee;
      flex: 0 0 100px;
      .cover {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>