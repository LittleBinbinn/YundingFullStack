<template>
    <div class="songlist-flex">
        <slot name="newsong">newSong.description</slot>
        <slot name="hotsong">hotSong.description</slot>
        <slot name="originsong">originSong.description</slot>
    </div>
</template>



<!-- <script setup>
import { defineProps } from 'vue'

const props = defineProps({
  newSong: Object,
  hotSong: Object,
  originSong: Object
})

</script> -->
<!-- <script>
import hotSong from '@/hotSong';
import newSong from '@/newSong';
import originSong from '@/originSong';

export default {
  props:{newSong, hotSong, originSong}
}
</script> -->

<style scoped>
.songlist-flex{
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
}
</style>