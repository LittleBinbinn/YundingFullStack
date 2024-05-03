<template>
        <slot name='artists' :artist='artist'></slot>
        <div class="lists">
        <slot name="newSong" :newSong = 'newSong'></slot>
        <slot name="hotSong" :hotSong = 'hotSong'></slot>
        <slot name="originSong" :originSong = 'originSong'></slot>
        </div>
        <hr>
</template>

<script setup lang="ts" name="wyy">
import artist from '../assets/artist.js';
import newSong from '../assets/newSong';
import hotSong from '../assets/hotSong';
import originSong from '../assets/originSong';
</script>
<style scoped> 
    .lists{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }
</style>