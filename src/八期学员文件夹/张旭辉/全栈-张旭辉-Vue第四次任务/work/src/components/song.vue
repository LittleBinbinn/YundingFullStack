<template>
    <div>
        <h2>榜单</h2>
        <hr>
        <div class="songbox">
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

<script setup>
    
</script>

<style scoped>
    hr{
        background-color: black;
        height:2px;
        width:100%;
    }
    .songbox{
        width:100%;
        height:800px;
        display:flex;
        justify-content: space-between;
    }
    .songbox>span{
        display:inline-block;
        width:33%;
    }
</style>