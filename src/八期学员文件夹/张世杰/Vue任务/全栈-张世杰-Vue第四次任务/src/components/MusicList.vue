<template>  
  <div class="music-list">  
    <slot name="title"></slot>  
    <div class="list-items">  
      <template v-for="(item, index) in displayedList" :key="index">  
        <slot name="item" :item="item">  
          <MusicListItem :key="index" :item="item" />  
        </slot>  
      </template>  
    </div>  
  </div>  
</template>  
  
<script setup>
/* eslint-disable */  
import { computed, defineProps, onMounted, ref } from 'vue';  
import MusicListItem from './MusicListItem.vue';  
  
defineProps({  
  list: {  
    type: Array,  
    required: true,  
  },  
});  
  
const displayedList = computed(() => {  
  return props.list.slice(0, 10); // 仅显示前10个歌手  
});  
  
// 如果还有其他的响应式状态或方法，可以在这里定义  
  
</script>  
  
<style scoped>  
.music-list {  
  display: flex;  
  flex-direction: column;  
}  
  
.list-items {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: flex-start;  
  align-items: center;  
}  
</style>