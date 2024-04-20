<template>
    <div>
        <section class="chao">
        <div class="text">
            <slot name="text"></slot>
        </div>
        <div class="pic">
            <slot name="pic"></slot>
        </div>
    </section>
    <hr>
    <section class="gan">
        <slot name="songList"></slot>
    </section>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        display: inline-block;
    }
    section{
        width: 260px;
        height: 120px;
        margin: 10px 30px;
    }
    .text{
        width: 170px;
        height: 160px;
    }
    .pic{
        box-sizing: border-box;
        padding: 20px 0;
        width: 90px;
        height: 160px;
        margin-top: 2px;

    }
    .chao{
        display: flex;
        height: 160px;
    }
    .gan{
        height: 580px;
    }
</style>