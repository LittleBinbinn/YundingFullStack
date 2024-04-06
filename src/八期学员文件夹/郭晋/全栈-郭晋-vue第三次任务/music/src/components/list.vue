<template>
 <slot name="artistList"></slot>
        
<hr width="100%" color="black" />
     <!-- <hr width="100%" color="black" /> -->
 <slot name="songsList"></slot>
  <slot name="content"></slot>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      type: Object 
    }
  }
  </script>
<style>
hr{
    margin-bottom: 5px;
}
</style>