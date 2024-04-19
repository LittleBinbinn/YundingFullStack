<script setup>

</script>

<template>
  <div>
    <h2>
      热门歌手
      <hr class="one">
    </h2>
    <slot name="artist"></slot>
    <hr>
  </div>
</template>

<style scoped>
.one {
  border: none;
  background: #000;
  height: 2px;
  width: 100%;
}
</style>