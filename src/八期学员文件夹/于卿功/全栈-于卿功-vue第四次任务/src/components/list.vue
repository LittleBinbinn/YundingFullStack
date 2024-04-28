<script setup>
import artist from '@/artist';
</script>

<template>
<div>
  <h2>热门歌手</h2>
  <hr>
  <div class="flex">
    <template v-for="(item,index) in artist" :key="index">
        <div class="flex2" >
        <img :src="item.altUrl" alt="">
        <div>{{ item.name }}</div>
    </div>
    </template>    
  </div>  
  <hr>
</div>
</template>

<style scoped>
    .flex{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 120px;
    }
    .flex2{
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100px;
        height: 100px;
    }
    .flex2 img{
        flex:2;
    }
</style>