<template>
  <span class="song">
  <h1>
      <slot name="title"></slot>
  </h1>
  <div class="content">
      <slot name="content"></slot>
  </div>
  <div>
    <slot name="pic"></slot>
  </div>
  <p>
    <slot name="ge"></slot>
  </p>
  </span>
</template>

<script>
export default{
  data(){
    return {}
  }
}
</script>

<style>
.song{
  position: relative;
  display: inline-block;
  width: 300px;
}
.content{
  width: 150px;
}
</style>