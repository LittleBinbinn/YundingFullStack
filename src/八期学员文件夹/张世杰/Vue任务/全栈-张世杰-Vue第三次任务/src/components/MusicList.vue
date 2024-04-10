<template>  
  <div class="music-list">  
    <slot name="title"></slot>  
    <div class="list-items">
      <slot name="item" v-for="(item, index) in displayedList" :item="item">  
        <MusicListItem v-if="!$slots.item" :key="index" :item="item" />  
      </slot>  
    </div>  
  </div>  
</template>  
  
<script>  
import MusicListItem from './MusicListItem.vue';  
  
export default {  
  components: {  
    MusicListItem,  
  },  
  props: {  
    list: {  
      type: Array,  
      required: true,  
    },  
  },  
  computed: {  
    displayedList() {  
      return this.list.slice(0, 10); // 仅显示前10个歌手  
    },  
  },  
};  
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