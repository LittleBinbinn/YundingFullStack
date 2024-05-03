<template>
    <div class="music">
        <h2>热门歌手</h2>
        <div class="list0">
            <slot name="hotSinger"></slot>
        </div>
        <br> 
        <h2>榜单</h2>
        <div class="list">
            <slot name="introduce"></slot>
        </div>
        <div class="music">
            <slot name="musicList"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.music {
    /* width: 100vh; */
    /* height: 100vh; */
    background-color: aliceblue;
    /* height: 330px; */
    border-bottom:1px solid black
}
.list0{
    border-top: 2px solid black;
    border-bottom: 1.5px solid black;
    height: 80px;
    background-color: #fff;
}
.list {
    display: flex;
    justify-content: space-between;
    height: 130px;
    background-color: #fff;
    border-top: 2px solid black;
}
/* .music {
    border-bottom:1px solid black
} */
</style>
