<template>
    <div class="container">
        <div class="top">
            <div>
                <h4>
                    <slot name="title"></slot>
                </h4>
                <span>
                    <slot name="world"></slot>
                </span>
            </div>
            <img :src="imgUrl" alt="">
        </div>
        <ul class="list">
            <slot name="songName"></slot>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
h4 {
    margin: 0;
}

.container {
    width: 30%;
}

img {
    width: 150px;
    height: auto;
    margin-bottom: 10px;
}

.top {
    display: flex;
    border-bottom: 1px solid black;
}

.list {
    list-style: decimal;
}

ul {
    border-bottom: 1px solid black;
}
</style>