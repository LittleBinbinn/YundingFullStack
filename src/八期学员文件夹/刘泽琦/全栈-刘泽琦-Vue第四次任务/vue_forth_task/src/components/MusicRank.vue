<template>
    <div class="musics">
        <div class="rank">
            <div class="box1">
                <div class="title">
                    <slot name="title">榜单名</slot>
                </div>
                <div class="intro">
                    <slot name="intro">榜单介绍</slot>
                </div>
            </div>
            <div class="box2">
                <slot name="pic">榜单图片</slot>
            </div>
        </div>

        <div class="content">
            <slot name="content">榜单内容</slot>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .rank {
        width: 600px;
        display: flex;
        height: 180px;
        border-bottom: 3px solid #000;
    }

    .intro {
        width: 300px;
        height: 20px;
    }

    .title {
        margin-top: 14px;
    }

    .box1 {
        margin-left: 14px;
    }

    .intro {
        margin-top: 16px;
        font-size: 18px;
    }

    .box2 {
        margin-top: 20px;
        margin-left: 50px;
    }

    .content {
        margin-left: 14px;
        border-bottom: 2px solid #000;
    }
</style>