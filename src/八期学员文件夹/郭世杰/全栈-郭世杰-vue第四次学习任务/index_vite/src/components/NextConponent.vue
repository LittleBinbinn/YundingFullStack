<template>
    <div>
        <next-conponentslot>
            <template #hot>
                <h2>热门歌手</h2>
                <hr>
                <div class="information">
                <div v-for="singer in artistList" :key="singer" >
                    <img :src="singer.picUrl" :alt="singer.altUrl" class="pic">
                    
                    <h4 >{{ singer.name }}</h4>
                    
                </div>
                </div>
                <hr>
                
            </template>
        </next-conponentslot>
            <h2>榜单</h2>
            <hr>
            <div class="context">
                <next-conponentslot>
                    <template #list>
                        <ul>
                            <div class="descrip">
                                <div>
                                    <h3>{{ newSongList.name }}</h3>
                                    <p>{{ newSongList.description }}</p>
                                </div>
                                <div>
                                    <img :src="newSongList.coverImgUrl" alt="">
                                </div>
                            </div><hr>
                                <div>
                                <li v-for="(newSong, index) in newSongList.tracks" :key="index"><a :href="newSong.picUrl">{{ index + 1}}-{{ newSong.name }}</a>
                                </li>
                            </div>
                            
                        </ul>
                    </template>
                </next-conponentslot>

                <next-conponentslot>
                    <template #list>
                        <ul>
                            <div class="descrip">
                                <div>
                                    <h3>{{ hotSongList.name }}</h3>
                                    <p>{{ hotSongList.description }}</p>
                                </div>
                                <div>
                                    <img :src="hotSongList.coverImgUrl" alt="">
                                </div></div>
                                <hr>
                                <div>
                                <li v-for="(hotSong, index) in hotSongList.tracks" :key="index"><a :href="hotSong.picUrl">{{ index + 1}}-{{ hotSong.name }}</a>
                                </li>
                            </div>
                            
                        </ul>
                    </template>
                </next-conponentslot>

                <next-conponentslot>
                    <template #list>
                        <ul>
                            <div class="descrip">
                                <div>
                                    <h3>{{ originSongList.name }}</h3>
                                    <p>{{ originSongList.description }}</p>
                                </div>
                                <div>
                                    <img :src="originSongList.coverImgUrl" alt="">
                                </div></div>
                                <hr>
                                <div>
                                <li v-for="(originSong, index) in originSongList.tracks" :key="index"><a :href="originSong.picUrl">{{ index + 1}}-{{ originSong.name }}</a>
                                </li>
                            </div>
                            
                        </ul>
                    </template>
                </next-conponentslot>
                
            </div><hr>
        
    </div>
</template>

<script setup>
import artistList from "../../data/artist.js"
import hotSongList from "../../data/hotSong.js"
import newSongList from "../../data/newSong.js"
import originSongList from "../../data/originSong.js"
import NextConponentslot from "./NextConponentslot.vue"
</script>

<style>
    .pic {
        height: 100px;
    }
    .information {
        display: flex;
        justify-content: space-around;
    }
    .context {
        display: flex;
    }
    .context img {
        height: 170px;
    }
    .descrip {
        display: flex;
    }
</style>