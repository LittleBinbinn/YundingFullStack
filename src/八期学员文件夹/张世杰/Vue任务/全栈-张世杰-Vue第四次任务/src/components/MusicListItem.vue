<template>  
  <div class="music-list-item">  
    <img :src="item.image" :alt="item.name" class="musician-image" />  
    <p class="musician-name">{{ item.name }}</p>  
  </div>  
</template>  
  
<script setup>  
import { defineProps } from 'vue';  
  
defineProps({  
  item: {  
    type: Object,  
    required: true,  
  },  
});  
  
// 如果还有其他响应式状态或方法，可以在这里定义  
// 但在这个组件中，我们仅依赖传入的 props  
</script>  
  
<style scoped>  
.music-list-item {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  margin: 20px;  
  margin-bottom: 10px;  
}  
  
.musician-image {  
  width: 100px;  
  height: 100px;  
  object-fit: cover;  
  margin-bottom: 5px;  
}  
</style>