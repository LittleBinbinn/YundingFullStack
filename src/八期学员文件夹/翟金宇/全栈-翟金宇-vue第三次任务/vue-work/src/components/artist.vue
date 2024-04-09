<template>
  <span class="singer">
    <div>
      <slot name="head"></slot>
    </div>
    <div>
      <slot name="name"></slot>
    </div>
  </span>
</template>

<script>
export default{
  
}
</script>

<style scoped>
.singer{
  display: inline-block;
  position: relative;
  width: 100px;
}
</style>