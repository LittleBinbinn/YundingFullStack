<template>
    <div class="container">
       <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'HeaderItem',
    props:{artists:{type:Array,required:true}}
}


</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    height:200px;
}
</style>