<template>
  <div class="all">
    <div class="ab">
      <div class="a">
        <router-link to="/Home" > Home </router-link>
      </div>
      <div class="b">
        <router-link to="/About"> About </router-link>
      </div>
    </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
  

</template>

<script setup>



</script>

<style scoped>
.all{
  width:500px;
  margin:0 auto;
}
  .ab {
    
    display: flex;
    
  }
  .a {
    padding-left: 150px;
    padding-right: 5px;
    border-right: 2px solid black;
  }
  .b {
    padding-left:5px
  }
</style>
