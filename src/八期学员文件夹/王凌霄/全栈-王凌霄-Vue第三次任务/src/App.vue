<template>
  <singerBox/>
  <songBox/>
</template>

<script setup>

import songBox from './components/songBox.vue';
import singerBox from './components/singerBox.vue';

</script>

<style>
#app {
  box-sizing: border-box;
  width: 1200px;
  padding: 0 100px;
  background-color: aliceblue;
  margin: 0 auto;
}
h2{
  float: left;
  margin: 0;
  padding: 0;
  display: block;
}
::-webkit-scrollbar{
  display: none;
}
</style>
