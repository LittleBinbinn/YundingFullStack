<template>
  <div>
    <div class="singers">
      <h2>热门歌手</h2>
      <div class="box">
        <div class="singer">
          <slot name="singer"> </slot>
        </div>
      </div>
    </div>
    <div class="lists">
      <h2>榜单</h2>
      <div class="box">
        <div class="list">
          <slot name="list"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.box {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
</style>
