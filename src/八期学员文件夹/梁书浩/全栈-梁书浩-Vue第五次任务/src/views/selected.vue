<template>  
    <h2>您的选择是：{{abc}}</h2>  

</template>  

<script setup>  
    const abc=localStorage.getItem("now-list")
</script>  

<style scoped>  
/* 你可以在这里添加一些样式 */  
</style>
