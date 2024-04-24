<template>
    <div class="singers">
        <div class="SingerPhoto">
            <slot name="SingerPhoto"></slot>
        </div>
        <div class="singerName">
            <slot name="singerName"></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.SingerPhoto {
    margin-top: 10px;
}
</style>