<template>
    <div class="head">
        <h2 class="text1">热门歌手</h2>
        <hr style="border: 2px solid black;"><br>
        <div class="headpics">
            <slot v-for="(pic,index) in pics" :key="index">
                <div class="headslot">
                    <img :src="pic.picUrl" :alt="pic.altUrl" class="img1" />
                    <p>{{ pic.name }}</p>
                </div>
            </slot>
            <!-- <headpart>
                <slot>
                    
                </slot>
            </headpart> -->
        </div>
        <hr style="border: 1px solid black;">
    </div>
    </template>

<script>
import {ref} from 'vue'
import {pics} from './artist.js'
export default {
    setup(){
        const picsref=ref(pics);
        // onMounted()=>{

        // }
        return{
            pics:picsref.value
        }
    }
}

</script>

<style scoped>
    .text1{
        font-size: 25px;
    }
    .head{
        width: 100%;
        height: 240px;
        /* background-color: orange; */
    }
    .headpics{
        width: 100%;
        height: 150px;
        /* background-color: green; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .headslot{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 150px;
        align-items: center;
    }
    .img1{
        width: 140px;
        /* height: 120px; */
    }
</style>    