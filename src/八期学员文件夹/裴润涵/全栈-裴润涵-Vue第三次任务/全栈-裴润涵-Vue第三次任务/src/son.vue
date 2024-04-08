<template>
    <div class="sum">
    <div class="head">
        <div class="words">
            <h3><slot name="text">text</slot></h3>
            <span><slot name="bot">bot</slot></span>
        </div>
        <div class="pic"><slot name="pic">pic</slot></div>
    </div>
    <hr class="one">
    <div class="cnt">
        <slot name="music">music</slot>
    </div>
    <hr>
    </div>
</template>

<script>
    export default {
        
}
</script>

<style scoped>
.sum{
    display: block;
    width: 400px;
    margin: 10px;
}
.head{
    display: flex;
    width: 350px;
    height: 180px;
}
.head .words span{
    color: #e3dfdf;
}
.pic{
    width: 100px;
}
.one{
    height: 2px;
    background-color: black;
}
</style>