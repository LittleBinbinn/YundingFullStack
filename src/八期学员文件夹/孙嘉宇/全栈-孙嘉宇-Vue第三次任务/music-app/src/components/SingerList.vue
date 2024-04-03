<template>
    <div class="singerMessage">
        <div class="singerPic">
            <slot name="singerPic"></slot>
        </div>
        <div class="singerName">
            <slot name="singerName"></slot>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            
        }
  }
}
</script>

<style scoped>
.singerMessage{
    flex:1
}
/* .singerPic{
    flex:2;
    background-color:greenyellow;
}
.singerName{
    flex:1;
    background-color:pink;
   
}  */
</style>
