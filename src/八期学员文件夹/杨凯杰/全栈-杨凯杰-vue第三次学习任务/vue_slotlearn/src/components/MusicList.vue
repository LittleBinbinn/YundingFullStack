<template>
    <div class="music-container">
        <div class="music newsong">
            <slot name="newsong"></slot>
        </div>

        <div class="music hotsong">
            <slot name="hotsong"></slot>
        </div>

        <div class="music originsong">
            <slot name="originsong"></slot>
        </div>
    </div>
</template>

<script>



    export default {
    name: 'MusicList',
    props: {
        newSongs: { type:Object, required: true },
        hotSongs: { type:Object, required: true },
        originSongs: { type:Object, required: true },
    }
    }
</script>


<style scoped>
    .music-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 100%;
    }

    .music{
        flex:1;
        text-align: center;
        padding: 10px;
    }
</style>