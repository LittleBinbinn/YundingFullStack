<template>
    <div id="chlid-components">
    <div id="title">
        <slot name="title"></slot>
    </div>
    <div class="empty"></div>
    <hr>
    <div class="empty"></div>
    <div id="data">
        <slot name="data"></slot>
    </div>
    <hr>
    </div>
</template>

<script setup>

</script>

<style scoped>
    #data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #title {
        font-size: 20px;
    }
    span {
        display: inline-block;
    }
    .empty {
        height: 10px;
    }
</style>