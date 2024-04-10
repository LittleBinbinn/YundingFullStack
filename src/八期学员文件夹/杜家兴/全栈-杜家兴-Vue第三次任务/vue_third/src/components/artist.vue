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

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.one {
  border: none;
  background: #000;
  height: 2px;
  width: 100%;
}
</style>
