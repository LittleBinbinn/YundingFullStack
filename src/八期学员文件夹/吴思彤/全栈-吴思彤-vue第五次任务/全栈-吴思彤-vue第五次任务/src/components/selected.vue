@@ -0,0 +1,12 @@
<template>  
    <h2>您的选择是：{{abc}}</h2>  

</template>  

<script setup>  
    const abc=localStorage.getItem("now-list")
</script>  

<style scoped>  
</style>