<template>
    <div class="mode">
        <div class="top">
            <div class="topText">
                <h3>
                    <slot name="title"></slot>
                </h3>
                <span>
                    <slot name="introduce"></slot>
                </span>
            </div>
            <img :src="imgUrl" alt="">
        </div>
        <hr>
        <ul>
            <slot name="songlist"></slot>
        </ul>
        <hr>


    </div>

</template>
<script>
export default {
     props:["imgUrl"] 
}
</script>
<style scoped>
img{
    width:130px;
    height: 130px;
}
.top{
 width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>