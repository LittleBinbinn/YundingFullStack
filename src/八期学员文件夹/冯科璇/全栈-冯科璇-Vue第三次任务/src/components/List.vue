<template>
    <div class="songBox">
        <div class="box">
            <div class="listname">
                <slot name="ListName"></slot>
            </div>
            <div class="Listintroduction">
                <slot name="Listintroduction"></slot>
            </div>
            <div class="pic">
                <slot name="pic"></slot>
            </div>
        </div>
        <div class="songs">
            <slot name="songs"></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.songBox {
    position: relative;
    height: 100px;
    display: flex;
    flex-direction: column;
}
.box {
    border-bottom: 4px solid black;
    margin-right: 8px;
}
.listname {
    margin-top: 4px;
    font-weight: bold;
    font-size: 20px;
}
.Listintroduction {
    height: 90px;
    font-size: 13px;
    margin-right: 150px;
    margin-top: 10px;
}
.pic {
    position: absolute;
    right: 50px;
    top: 20px;
}
.songs {
    font-size: 18px;
    border-bottom: 2px solid black;
    margin-right: 8px;
}
</style>
