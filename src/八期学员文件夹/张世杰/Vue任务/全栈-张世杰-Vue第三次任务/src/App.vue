<!-- App.vue -->  
<template>  
  <div id="app">  
    <MusicList :list="hotSingers">  
      <template #title>  
        <h2>热门歌手</h2>
      </template>
    </MusicList>  
  
    <MusicList :list="rankLists" class="rank-lists">  
      <template #title>  
        <h2>榜单</h2>  
      </template>  
      <template #item="{ item }">  
        <div class="rank-item">  
          <h3>{{ item.name }}</h3>  
          <MusicList :list="item.subList" class="sub-list">  
            <template #title>  
              <h4>{{ item.subListTitle }}</h4>  
            </template>  
            <template #item="{ item }">  
              <MusicListItem :item="item" />  
            </template>  
          </MusicList>  
        </div>  
      </template>  
    </MusicList>  
  </div>  
</template>  
  
<script>  
import MusicList from './components/MusicList.vue';  
import MusicListItem from './components/MusicListItem.vue';  
  
export default {  
  name: 'App',  
  components: {  
    MusicList,  
    MusicListItem,  
  },  
  data() {  
    return {  
      hotSingers: [   
        { name: '林俊杰', image: 'http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg' },  
        { name: '薛之谦', image: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg' }, 
        { name: '陈奕迅', image: 'http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg' },
        { name: '邓紫棋', image: 'http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg' },
        { name: '李荣浩', image: 'http://p1.music.126.net/mkWDxcXZk8W3NwdCEMg00A==/109951165693668650.jpg' },
        { name: '告五人', image: 'http://p1.music.126.net/Xyoa72EqbaHGHiSfL5D_qA==/109951168306629780.jpg' },
        { name: '周杰伦', image: 'http://p1.music.126.net/BbR3TuhPULMLDV0MjczI4g==/109951165793869641.jpg' },
        { name: '毛不易', image: 'http://p1.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg' },
        { name: '张杰', image: 'http://p1.music.126.net/-Of37SoslyjWsPhLKTogqQ==/109951168167006631.jpg' },
        { name: '许嵩', image: 'http://p1.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg' }, 
      ],  
      rankLists: [  
        {  
          name: '新歌榜',  
          subListTitle: '云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。',  
          subList: [ 
            { name: 'アイドル', image: 'http://p3.music.126.net/4EQzPt4OaZraiSCRGpINwQ==/109951168506561762.jpg' },  
            { name: '声音', image: 'http://p3.music.126.net/eble6u8GXivcHyZ9PS6P0w==/109951168475709963.jpg' }, 
            { name: '身骑白马', image: 'http://p3.music.126.net/iEdL_IAsaIRwNX10HtNsGg==/109951168540070885.jpg' }, 
            { name: '明天', image: 'http://p3.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: 'Slow', image: 'http://p4.music.126.net/pC6aJUZMTRe_rD_6t_EbYw==/109951168548837659.jpg' }, 
            { name: '雨过天不晴', image: 'http://p3.music.126.net/5bqKKSxhI2w-LCicrqZPvg==/109951168483915678.jpg' }, 
            { name: '芯房', image: 'http://p3.music.126.net/E1RzJTmi-qCYAUQ9a1khhw==/109951168536334922.jpg' }, 
            { name: '床', image: 'http://p3.music.126.net/I7iZevCpkwfCj75KrNUkLw==/109951168511501593.jpg' }, 
            { name: '冠军情歌', image: 'http://p4.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: '迷宫', image: 'http://p3.music.126.net/KA4OfYKYT1b_3W94CIrwDg==/109951168500881027.jpg' },  
          ],  
        },  
        {  
          name: '热歌榜',  
          subListTitle: '云音乐热歌榜：云音乐用户一周内收听所有线上歌曲官方TOP排行榜，每日更新。',  
          subList: [  
            { name: 'アイドル', image: 'http://p3.music.126.net/4EQzPt4OaZraiSCRGpINwQ==/109951168506561762.jpg' },  
            { name: '声音', image: 'http://p3.music.126.net/eble6u8GXivcHyZ9PS6P0w==/109951168475709963.jpg' }, 
            { name: '身骑白马', image: 'http://p3.music.126.net/iEdL_IAsaIRwNX10HtNsGg==/109951168540070885.jpg' }, 
            { name: '明天', image: 'http://p3.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: 'Slow', image: 'http://p4.music.126.net/pC6aJUZMTRe_rD_6t_EbYw==/109951168548837659.jpg' }, 
            { name: '雨过天不晴', image: 'http://p3.music.126.net/5bqKKSxhI2w-LCicrqZPvg==/109951168483915678.jpg' }, 
            { name: '芯房', image: 'http://p3.music.126.net/E1RzJTmi-qCYAUQ9a1khhw==/109951168536334922.jpg' }, 
            { name: '床', image: 'http://p3.music.126.net/I7iZevCpkwfCj75KrNUkLw==/109951168511501593.jpg' }, 
            { name: '冠军情歌', image: 'http://p4.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: '迷宫', image: 'http://p3.music.126.net/KA4OfYKYT1b_3W94CIrwDg==/109951168500881027.jpg' },  
          ],  
        },
        {  
          name: '原创榜',  
          subListTitle: '云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/',  
          subList: [  
            { name: 'アイドル', image: 'http://p3.music.126.net/4EQzPt4OaZraiSCRGpINwQ==/109951168506561762.jpg' },  
            { name: '声音', image: 'http://p3.music.126.net/eble6u8GXivcHyZ9PS6P0w==/109951168475709963.jpg' }, 
            { name: '身骑白马', image: 'http://p3.music.126.net/iEdL_IAsaIRwNX10HtNsGg==/109951168540070885.jpg' }, 
            { name: '明天', image: 'http://p3.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: 'Slow', image: 'http://p4.music.126.net/pC6aJUZMTRe_rD_6t_EbYw==/109951168548837659.jpg' }, 
            { name: '雨过天不晴', image: 'http://p3.music.126.net/5bqKKSxhI2w-LCicrqZPvg==/109951168483915678.jpg' }, 
            { name: '芯房', image: 'http://p3.music.126.net/E1RzJTmi-qCYAUQ9a1khhw==/109951168536334922.jpg' }, 
            { name: '床', image: 'http://p3.music.126.net/I7iZevCpkwfCj75KrNUkLw==/109951168511501593.jpg' }, 
            { name: '冠军情歌', image: 'http://p4.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg' }, 
            { name: '迷宫', image: 'http://p3.music.126.net/KA4OfYKYT1b_3W94CIrwDg==/109951168500881027.jpg' },  
          ],  
        },   
      ],  
    };  
  },  
};  
</script>  
  
<style>  
.rank-lists {  
  width: 100%;  
}  
  
.rank-item {  
  flex: 1; 
  margin-right: 20px;  
}  
  
.rank-item:last-child {  
  margin-right: 0;  
}  
</style>