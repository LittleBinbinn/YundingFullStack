<template>
        <h2>{{ title }}</h2>
        <hr>
        <slot  ></slot>
</template>

<script>

export default {

    props:['title','hotSong','artist','newSong','orginSong'],
    data(){}
}
</script>

<style scoped>
</style>