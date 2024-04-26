<template>
  <div>
    <slot name='artists' :artist='artist'></slot>

    <div class="lists"> 
        <slot :newSong='newSong' name='newSong'></slot>

        <slot :hotSong='hotSong' name='hotSong'></slot>

        <slot :originSong='originSong' name='originSong'></slot>
    </div>
    <hr>
  </div>
</template>

<script>
import artist from '../assets/artist.js'
import newSong from '../assets/newSong.js'
import hotSong from '../assets/hotSong.js'
import originSong from '../assets/originSong.js'
export default {
    name:'wyy',
    data(){
        return{
            artist,
            hotSong,
            originSong,
            newSong
        }
    }
}
</script>
<style>
    .singerPic{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        text-align: center;
    }
    .lists{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }
    .list{
        width: 400px;
        height: 400px;
    }
    .head{
        display: flex;
    }
    .head_text{
        width: 250px;
        height: 125;
    }
    .head_pic{
        width: 125px;
        height: 125px;
        margin-left: auto;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>