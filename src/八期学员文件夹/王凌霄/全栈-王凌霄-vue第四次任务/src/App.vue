<script setup lang="ts">
    import hotSiger from './components/hotSinger.vue'
    import hotRating from './components/hotRating.vue'
    import water from './components/waterFall.vue'
    import flow from './components/flowLeter.vue'
</script>

<template>
    <!-- <hhqsaz>1234r3</hhqsaz> -->
    <hotSiger></hotSiger>
    <br>
    <hotRating></hotRating>
    <water></water>
    <flow></flow>
</template>

<style lang="scss">
.page{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.title{
    text-align: left;
    font-size: 34px;
    color: black;
}
</style>
