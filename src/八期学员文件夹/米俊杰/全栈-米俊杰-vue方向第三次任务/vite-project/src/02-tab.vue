

<template>
  <div>
<hr>


<div class="column">
<div class="part"><slot></slot></div>


</div>




  </div>
  
</template>


<script >
export default{
props:{
      name:{
        type:String,
        default:"111"
      },
      content:{
        type:String,
        default:""
      }
    
      
}


}

</script>

<style scoped>
.column{
  flex-direction: column;
  height: 80px;
 
}
.part{
  display: flex;
  justify-content: space-around;
}
</style>
