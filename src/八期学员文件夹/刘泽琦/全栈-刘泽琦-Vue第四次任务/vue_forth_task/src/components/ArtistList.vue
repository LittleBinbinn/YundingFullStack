<template>
    <div class="artists">
        <div class="artistImg">
            <slot name="artistImg">artistImg</slot>
        </div>
        <div class="artistName">
            <slot name="artistName">artistName</slot>
        </div>
    </div>
</template>

<script setup>
        const artist = defineProps({
            artist: {
                type: Object,
                required: true
            }
        })
    
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .artistImg {
        display: flex;
    }
</style>