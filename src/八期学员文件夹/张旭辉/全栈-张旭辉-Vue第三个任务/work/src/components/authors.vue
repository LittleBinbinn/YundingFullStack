<template>
    <div>
        <h2>热门歌手</h2>
        <h2><hr></h2>
        <slot name="artist"></slot>
        <h2><hr></h2>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
  hr{
    background-color: black;
    height:2px;
    width:100%;
  }  
</style>