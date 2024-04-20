<template>
    <div>
        <h2>
            榜单
            <hr class="one">
        </h2> 
        <div class="songBox">
            <span>
                <slot name="hotSong"></slot>
            </span>
            <span>
                <slot name="newSong"></slot>
            </span>
            <span>
                <slot name="originSong"></slot>
            </span>
        </div>
    </div>
</template>

<script>

</script>

<style>
.one {
    border: none;
    background: #000;
    height: 2px;
    width: 100%;
}
.songBox {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: space-between;
}
.songBox>span {
    display: inline-block;
    width: 33%;
}
</style>