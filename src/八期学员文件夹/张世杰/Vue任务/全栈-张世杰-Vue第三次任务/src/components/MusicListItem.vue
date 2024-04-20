<!-- MusicListItem.vue -->  
<template>  
  <div class="music-list-item">  
    <img :src="item.image" :alt="item.name" class="musician-image" />  
    <p class="musician-name">{{ item.name }}</p>  
  </div>  
</template>  
  
<script>  
export default {  
  props: {  
    item: {  
      type: Object,  
      required: true,  
    },  
  },  
};  
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