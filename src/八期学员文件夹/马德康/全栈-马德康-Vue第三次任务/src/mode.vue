<template>  
<div class="container">
    <div class="top">
        <div>
        <h4><slot name="title"></slot></h4>
        <span><slot name="description"></slot></span>
        </div>
    <img :src="imgUrl">
    </div>
    <ul class="Alllist">
        <slot name="songName"></slot>
    </ul>
</div>
</template>

<script>
export default {
    props: ["imgUrl"]
}
</script>

<style scoped>
h4{
    margin: 0;
}
.container{
    float: left;
    width: 300px;
    margin-right: 8px;
}
img{
    width: 150px;
    margin-left: 15px;
    margin-bottom: 10px;
}
.top{
    display: flex;
    border-bottom: 1px solid black;
}
.Alllist{
    list-style: decimal;
    margin-left: 15px;
}
ul{
    border-bottom: 1px solid black;
}
</style>