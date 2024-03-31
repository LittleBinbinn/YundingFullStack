<template>  
  <bookparent />  
  <bookchild />
  <!-- 如果需要，可以添加 <book-child /> -->  
</template>  
  
<script>  
import bookparent from './components/bookparent.vue';  
import bookchild from './components/bookchild.vue'; // 如果需要  
  
export default {  
  components: {  
    bookparent,  
    bookchild // 如果需要  
  },  
};  
</script>  
  
<style>  
/* 你的样式代码 */  
</style>