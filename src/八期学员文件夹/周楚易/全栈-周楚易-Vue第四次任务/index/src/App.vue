
<template>
  <FancyList>
    <template #title>热门歌手</template>
    <template #top-artists>
      <ul  class="horizontal-list">
        <li v-for="artist in topArtists" :key="artist.id" class="horizontal-list-li">
          <img :src="artist.picUrl" :alt="artist.picUrl" class="artist-image">
          <br>
          <span class="artist-name" style="text-align: center;">{{ artist.name }}</span>
        </li>
      </ul>
    </template>
    <template #newTitle><h2>新歌榜</h2></template>
    <template #newContent><span style="position:relative;font-size: 20px; top: -20px">云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行）官方TOP排行榜，每天更新</span></template>
    <template #newList>
      <ul class="track-ul">
        <li v-for="track in tracks" :key="track.id" class="track-li">
          <span style="font-size: 22px">{{ track.id }}-{{ track.name }}</span>
        </li>
      </ul>
    </template>
    <template #originList>
      <ul class="track-ul">
        <li v-for="oTrack in oTracks" :key="oTrack.id" class="track-li">
          <span style="font-size: 22px">{{ oTrack.id }}-{{ oTrack.name }}</span>
        </li>
      </ul>
    </template>
    <template #hotList>
      <ul class="track-ul">
        <li v-for="hTrack in hTracks" :key="hTrack.id" class="track-li">
          <span style="font-size: 22px">{{ hTrack.id }}-{{ hTrack.name }}</span>
        </li>
      </ul>
    </template>
  </FancyList>
</template>

<script>
import FancyList from "./FancyList.vue"

import { ref } from "vue";

export default {
  components: {
    FancyList
  },
  setup() {
    const topArtists = ref([
      {
        id: 1,
        name: "林俊杰",
        picUrl:
            "http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg",
        altUrl:
            "http://p1.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg",
      },
      {
        id: 2,
        name: "薛之谦",
        picUrl:
            "http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg",
        altUrl:
            "http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg",
      },
      {
        id: 3,
        name: "陈奕迅",
        picUrl:
            "http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg",
        altUrl:
            "http://p1.music.126.net/rYYhHXZHwCfizE0N46F37Q==/109951166115911716.jpg",
      },
      {
        id: 4,
        name: "邓紫棋",
        picUrl:
            "http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg",
        altUrl:
            "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg",
      },
      {
        id: 5,
        name: "李荣浩",
        picUrl:
            "http://p1.music.126.net/mkWDxcXZk8W3NwdCEMg00A==/109951165693668650.jpg",
        altUrl:
            "http://p1.music.126.net/MST3f1Uv77SwFyTf0Gcj5w==/109951168324499292.jpg",
      },
      {
        id: 6,
        name: "告五人",
        picUrl:
            "http://p1.music.126.net/Xyoa72EqbaHGHiSfL5D_qA==/109951168306629780.jpg",
        altUrl:
            "http://p1.music.126.net/MbhzNEtk-c3KybdGtq3ueQ==/109951168306621485.jpg",
      },
      {
        id: 7,
        name: "周杰伦",
        picUrl:
            "http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg",
        altUrl:
            "http://p1.music.126.net/Esjm32Q05PQoX8pF008u7w==/109951165793871057.jpg",
      },
      {
        id: 8,
        name: "毛不易",
        picUrl:
            "http://p1.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg",
        altUrl:
            "http://p1.music.126.net/3L4q_THtqVP0Tuofry303Q==/109951168543731054.jpg",
      },
      {
        id: 9,
        name: "张杰",
        picUrl:
            "http://p1.music.126.net/-Of37SoslyjWsPhLKTogqQ==/109951168167006631.jpg",
        altUrl:
            "http://p1.music.126.net/z2HqHy_CXghF0ehV-CzL9g==/109951168234197887.jpg",
      },
      {
        id: 10,
        name: "许嵩",
        picUrl:
            "http://p1.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg",
        altUrl:
            "http://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg",
      },
    ])

    const tracks = ref([
      {
        id:1,
        name: "アイドル",
      },
      {
        id:2,
        name: "声音",
      },
      {
        id:3,
        name: "身骑白马",
      },
      {
        id:4,
        name: "明天",
      },
      {
        id:5,
        name: "Slow",
      },
      {
        id:6,
        name: "雨过天不晴",
      },
      {
        id:7,
        name: "芯房",
      },
      {
        id:8,
        name: "床",
      },
      {
        id:9,
        name: "冠军情歌",
      },
      {
        id:10,
        name: "迷宫",
      },
    ])

    const oTracks = ref([
      {
        id:1,
        name: "床",
      },
      {
        id:2,
        name: "经典",
      },
      {
        id:3,
        name: "现在 你才不幸福",
      },
      {
        id:4,
        name: "烟花之下",
      },
      {
        id:5,
        name: "夏日痛哭企画",
      },
      {
        id:6,
        name: "9.26",
      },
      {
        id:7,
        name: "戒烟报告",
      },
      {
        id:8,
        name: "8Hz",
      },
      {
        id:9,
        name: "人间指南",
      },
      {
        id:10,
        name: "别哭了吧",
      },
    ])

    const hTracks = ref([
      {
        id:1,
        name: "雪 Distance",
      },
      {
        id:2,
        name: "我记得",
      },
      {
        id:3,
        name: "把回忆拼好给你",
      },
      {
        id:4,
        name: "精卫",
      },
      {
        id:5,
        name: "姑娘在远方",
      },
      {
        id:6,
        name: "我的美丽feat.海洋Bo",
      },
      {
        id:7,
        name: "可能",
      },
      {
        id:8,
        name: "在你的身边",
      },
      {
        id:9,
        name: "若把你",
      },
      {
        id:10,
        name: "唯一",
      },
    ])

    return {
      topArtists,
      tracks,
      oTracks,
      hTracks
    }
  }
}

//   data(){
//     return{
//       topArtists:[
//         {
//           id: 1,
//           name: "林俊杰",
//           picUrl:
//               "http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg",
//           altUrl:
//               "http://p1.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg",
//         },
//         {
//           id: 2,
//           name: "薛之谦",
//           picUrl:
//               "http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg",
//           altUrl:
//               "http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg",
//         },
//         {
//           id: 3,
//           name: "陈奕迅",
//           picUrl:
//               "http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg",
//           altUrl:
//               "http://p1.music.126.net/rYYhHXZHwCfizE0N46F37Q==/109951166115911716.jpg",
//         },
//         {
//           id: 4,
//           name: "邓紫棋",
//           picUrl:
//               "http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg",
//           altUrl:
//               "http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg",
//         },
//         {
//           id: 5,
//           name: "李荣浩",
//           picUrl:
//               "http://p1.music.126.net/mkWDxcXZk8W3NwdCEMg00A==/109951165693668650.jpg",
//           altUrl:
//               "http://p1.music.126.net/MST3f1Uv77SwFyTf0Gcj5w==/109951168324499292.jpg",
//         },
//         {
//           id: 6,
//           name: "告五人",
//           picUrl:
//               "http://p1.music.126.net/Xyoa72EqbaHGHiSfL5D_qA==/109951168306629780.jpg",
//           altUrl:
//               "http://p1.music.126.net/MbhzNEtk-c3KybdGtq3ueQ==/109951168306621485.jpg",
//         },
//         {
//           id: 7,
//           name: "周杰伦",
//           picUrl:
//               "http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg",
//           altUrl:
//               "http://p1.music.126.net/Esjm32Q05PQoX8pF008u7w==/109951165793871057.jpg",
//         },
//         {
//           id: 8,
//           name: "毛不易",
//           picUrl:
//               "http://p1.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg",
//           altUrl:
//               "http://p1.music.126.net/3L4q_THtqVP0Tuofry303Q==/109951168543731054.jpg",
//         },
//         {
//           id: 9,
//           name: "张杰",
//           picUrl:
//               "http://p1.music.126.net/-Of37SoslyjWsPhLKTogqQ==/109951168167006631.jpg",
//           altUrl:
//               "http://p1.music.126.net/z2HqHy_CXghF0ehV-CzL9g==/109951168234197887.jpg",
//         },
//         {
//           id: 10,
//           name: "许嵩",
//           picUrl:
//               "http://p1.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg",
//           altUrl:
//               "http://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg",
//         },
//       ],
//       tracks: [
//         {
//           id:1,
//           name: "アイドル",
//         },
//         {
//           id:2,
//           name: "声音",
//         },
//         {
//           id:3,
//           name: "身骑白马",
//         },
//         {
//           id:4,
//           name: "明天",
//         },
//         {
//           id:5,
//           name: "Slow",
//         },
//         {
//           id:6,
//           name: "雨过天不晴",
//         },
//         {
//           id:7,
//           name: "芯房",
//         },
//         {
//           id:8,
//           name: "床",
//         },
//         {
//           id:9,
//           name: "冠军情歌",
//         },
//         {
//           id:10,
//           name: "迷宫",
//         },
//       ],
//       oTracks: [
//         {
//           id:1,
//           name: "床",
//         },
//         {
//           id:2,
//           name: "经典",
//         },
//         {
//           id:3,
//           name: "现在 你才不幸福",
//         },
//         {
//           id:4,
//           name: "烟花之下",
//         },
//         {
//           id:5,
//           name: "夏日痛哭企画",
//         },
//         {
//           id:6,
//           name: "9.26",
//         },
//         {
//           id:7,
//           name: "戒烟报告",
//         },
//         {
//           id:8,
//           name: "8Hz",
//         },
//         {
//           id:9,
//           name: "人间指南",
//         },
//         {
//           id:10,
//           name: "别哭了吧",
//         },
//       ],
//       hTracks: [
//         {
//           id:1,
//           name: "雪 Distance",
//         },
//         {
//           id:2,
//           name: "我记得",
//         },
//         {
//           id:3,
//           name: "把回忆拼好给你",
//         },
//         {
//           id:4,
//           name: "精卫",
//         },
//         {
//           id:5,
//           name: "姑娘在远方",
//         },
//         {
//           id:6,
//           name: "我的美丽feat.海洋Bo",
//         },
//         {
//           id:7,
//           name: "可能",
//         },
//         {
//           id:8,
//           name: "在你的身边",
//         },
//         {
//           id:9,
//           name: "若把你",
//         },
//         {
//           id:10,
//           name: "唯一",
//         },
//       ],
//     }
//
//   }
// }

</script>

<style>
.artist-image{
  width: 100px;
  height: 100px;
  left: 50%;
  margin-inside: -50%;
}
.horizontal-list{
  list-style: none;
  display: inline-flex;
}
.horizontal-list-li{
  padding: 15px;
  text-align: center;
}
.track-ul{
  list-style: none;
}
.track-li{
  padding: 5px;
}
</style>
