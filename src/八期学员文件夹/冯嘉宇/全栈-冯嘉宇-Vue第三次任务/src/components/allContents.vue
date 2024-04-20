<template>
    <div>
        <h2>热门歌手</h2>
        <div class="people">
            <slot name="things"></slot>
        </div>
    </div>
    <div class="songall">
        <h2>榜单</h2>
        <div class="song">
            <slot name="songs"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .people {
        display: flex;
        justify-content: space-around;
        width:770px;
        height:80px;
        text-align: center;
        padding-top: 5px;
        border-top: 2px solid black;
        border-bottom: 1px solid black;
    }
    .song {
        display: flex;
        justify-content: space-around;
        border-top: 2px solid black;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
    }
    .songall {
        width: 770px;
    }
</style>