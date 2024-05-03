<template>
  <div class="header">

    <!-- <div>
      <h1>热门歌手</h1>
    </div>
    <hr>
    <ul>
      <li v-for="(items,index) in artist" :key="items">{{ items.name }}<img :src="artist[index].picUrl"> </li>
    </ul> -->

    <father>
      <template v-slot:head>
        <div>
          <h1>热门歌手</h1>
        </div>
      </template>
      <template v-slot:cnt>
        <ul>
          <li v-for="(items, index) in artist" :key="items">{{ items.name }}<img :src="artist[index].picUrl"> </li>
        </ul>
      </template>
    </father>
  </div>
  <div class="content">
    <father>
      <template v-slot:head>
        <div>
          <h1>榜单</h1>
        </div>
      </template>

      <template v-slot:cnt>
        <div class="contentt">
          <son>
            <template v-slot:text>{{ hotsong.name }}</template>
            <template v-slot:bot>{{ hotsong.description }}</template>
            <template v-slot:pic><img :src="hotsong.coverImgUrl"></template>
            <template v-slot:music>
              <ol>
                <li v-for="(items,index) in hotsong.tracks" :key="items">
                  {{ items.name }}
                </li>
              </ol>
            </template>
          </son>
          <son>
            <template v-slot:text>{{newsong.name }}</template>
            <template v-slot:bot>{{newsong.description }}</template>
            <template v-slot:pic><img :src="newsong.coverImgUrl"></template>
            <template v-slot:music>
              <ol>
                <li v-for="items in newsong.tracks" :key="items">{{ items.name }}</li>
              </ol>
            </template>
          </son>
          <son>
            <template v-slot:text>{{ originsong.name}}</template>
            <template v-slot:bot>{{ originsong.description}}</template>
            <template v-slot:pic><img :src="originsong.coverImgUrl"></template>
            <template v-slot:music>
              <ol>
                <li v-for="(items,index) in originsong.tracks" :key="items">{{ items.name }}</li>
              </ol>
            </template>
          </son>
        </div>
      </template>

    </father>
  </div>
</template>

<script>
import father from '../src/father.vue'
import son from '../src/son.vue'
import { ref } from 'vue'
import hotsong1 from './data/hotSong'
import newsong1 from './data/newSong'
import originsong1 from './data/originSong'
import artist1 from './data/artist'
export default {
  components: {
      father,son
    },
  //   data() {
  //     return {
  //       artist: artist,
  //       hotsong: hotsong,
  //       newsong: newsong,
  //       originsong:originsong
  //   }
  // },
  setup() {
    // function data() {
    //     return {
    //     artist: artist,
    //     hotsong: hotsong,
    //     newsong: newsong,
    //     originsong:originsong
    // }
    // }
    // const data = reactive({
    //   artist : artist,
    //   hotsong : hotsong,
    //   newsong : newsong,
    //   originsong : originsong
    // })
    const artist = ref(artist1);
    const hotsong = ref(hotsong1);
    const newsong = ref(newsong1);
    const originsong = ref(originsong1);
    return {
      artist,hotsong,newsong,originsong
    }
    
    }
  
}
</script>

<style scoped>
.header img{
  width: 80px;
  height: 60px;
}
.header ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.header ul li{
  display: flex;
  text-align: center;
  width: 80px;
  height: 60px;
  flex-direction: column-reverse;
  margin: 10px;
}
.contentt{
  display: flex;
  text-align: left;
}
.contentt img{
  width: 150px;
  height: 150px;
}
h1{
  text-align: left;
}
</style>