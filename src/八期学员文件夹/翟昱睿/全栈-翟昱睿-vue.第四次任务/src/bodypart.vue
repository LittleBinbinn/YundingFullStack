<template>
<!-- <slot v-for="(hotSong,index) in hotSongs" :key="index">
    <div class="part">
        <div class="part1">
            <h1>{{ name }}</h1>
            <h2>{{ description }}</h2>
        </div>
        <div class="part2">
            <img :src="coverImgUrl" alt="#" />
        </div>
    </div>
    </slot> -->
    <div class="bodypart">
        <div class="part">
            <div class="part1">
                <div class="part11"><slot name="textone"></slot></div>
                <div class="part12"><slot name="texttwo"></slot></div>
            </div>
            <div class="part2">
                <slot name="img"></slot>
            </div>
        </div>
        <div class="prat">
            <hr style="border: 2px solid black;">
            <slot name="song"></slot>
            <hr style="border: 2px solid black;">
        </div>
        </div>
</template>
<script>
    // import {hotSongs} from './hotSong.js'
    export default {
    // data(){
    //     return{
    //         hotSongs
    //     };
    // }

}
</script>
<style scoped>
    .bodypart{
        width: 500px;
        height: 600px;
        /* background-color: orange; */
        display: flex;
        flex-direction: column;
        /* background-color: #fff; */
    }
    .part{
        width: 450px;
        height: 250px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .part1{
        width: 250px;
        /* height: 400px; */
        /* background-color: blue; */
    }
    .part2{
        width: 100px;
        height: 100px;
    }
    .part11{
        font-size: 20px;
    }
    .prat{
        /* background-color: orange; */
        width: 500px;
        height: 400px;
    }
</style>