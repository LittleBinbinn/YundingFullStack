<script setup lang="ts">
import { defineProps, PropType } from "vue";
interface Item {
  name: string;
  picUrl: string;
  altUrl: string;
}
defineProps({
  item: Object as PropType<Item>,
});
</script>
<template>
  <div>
    <img :src="item?.picUrl" :alt="item?.altUrl" class="ui">
    <span> {{ item?.name }}</span>
  </div>
</template>

<style scoped lang="scss">
div {
  box-sizing: border-box;
  width: 100px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  fl .ui {
    display: block;
    width: 80px;
    height: 80px;
    background-color: blueviolet;
  }
  span {
    color: #000;
  }
}
</style>
