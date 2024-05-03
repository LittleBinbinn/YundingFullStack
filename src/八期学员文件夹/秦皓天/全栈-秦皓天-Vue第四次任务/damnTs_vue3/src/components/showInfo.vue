<script lang="ts" setup>
import category from "./category.vue";
import newSongfData from "../data/newSong.js"
import hotSongfData from "../data/hotSong.js"
import originSongfData from "../data/originSong.js"
import artistsData from "../data/artist.js"
import { reactive } from "vue";

let newData = reactive(newSongfData)
let hotData = reactive(hotSongfData)
let originData = reactive(originSongfData)
let artistData = reactive(artistsData)
console.log(newSongfData);
</script>

<template>
    <div class="showList">
        <div class="topShow">
            <span>热门歌手</span>
            <div class="line"></div>
            <div class="person">
                <ul>
                    <li v-for="item in artistData " :key="item.name">
                        <img :src="item.picUrl" alt="" class="personPhoto">
                        <p>{{ item.name }}</p>
                    </li>
                </ul>
            </div>
            <div class="topLine"></div>
        </div>
        <div class="list">
            <span>榜单</span>
            <div class="line"></div>
        </div>
        <category>
            <template #page>
                <div class="page">
                    <div class="leftWords">
                        <span class="bigTitle">新歌榜</span><br>
                        <span class="smallWords">{{ newData.description }}</span>
                    </div>
                    <div class="rightPhoto">
                        <img :src="newData.coverImgUrl" class="photo">
                    </div>
                </div>
            </template>
            <template #word>
                <div class="realTitle">
                    <ol>
                        <li v-for="item in newData.tracks" :key="item.name">{{ item.name }}</li>
                    </ol>
                </div>
                <div class="everyLine"></div>
            </template>
        </category>
        <category>
            <template #page>
                <div class="page">
                    <div class="leftWords">
                        <span class="bigTitle">热歌榜</span><br>
                        <span class="smallWords">{{ hotData.description }}</span>
                    </div>
                    <div class="rightPhoto">
                        <img :src="hotData.coverImgUrl" class="photo">
                    </div>
                </div>
            </template>
            <template #word>
                <div class="realTitle">
                    <ol>
                        <li v-for="item in hotData.tracks">{{ item.name }}</li>
                    </ol>
                </div>
                <div class="everyLine"></div>
            </template>
        </category>
        <category>
            <template #page>
                <div class="page">
                    <div class="leftWords">
                        <span class="bigTitle">原创榜</span><br>
                        <span class="smallWords">
                            {{ originData.description }}
                            <a href="http://music.163.com/nmusician/">点我成为音乐人</a>
                        </span>
                    </div>
                    <div class="rightPhoto">
                        <img :src="originData.coverImgUrl" class="photo">
                    </div>
                </div>
            </template>
            <template #word>
                <div class="realTitle">
                    <ol>
                        <li v-for="item in originData.tracks">{{ item.name }}</li>
                    </ol>
                </div>
                <div class="everyLine"></div>
            </template>
        </category>
        <div class="bottomLine"></div>
    </div>
</template>

<style scoped>
.showList {
    width: 820px;
    height: 500px;
    background-color: rgba(202, 223, 243, 0.3);
    position: relative;
    left: 50%;
    top: 100px;
    margin-left: -400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bottomLine {
    position: absolute;
    top: 475px;
    left: 10px;
    border-bottom: 1px solid black;
    width: 800px;
    height: 0;
}

.everyLine {
    position: relative;
    left: 15px;
    border-bottom: 1px solid black;
    width: 200px;
    height: 0;
}

.list {
    position: absolute;
    left: 10px;
    top: 120px;
}

.topShow {
    position: absolute;
    left: 10px;
}

.topLine {
    border-bottom: 1px solid black;
    width: 780px;
    height: 0;
}

ul {
    list-style-type: none;
    display: flex;
}

ul li {
    position: relative;
    margin-right: 35px;
    text-align: center;
}

ul li p {
    font-size: 12px;
}
.personPhoto{
    width: 40px;
    height: 40px;
}
.list span,.topShow span {
    font-size: 16px;
    font-weight: 700;
}

.line {
    border-bottom: 2px solid black;
    width: 780px;
    height: 0;
}

.page {
    width: 250px;
    height: 110px;
    background-color: floralwhite;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.leftWords {
    width: 150px;
    height: 80px;
    position: relative;
    top: 7px;
}

.bigTitle {
    font-weight: 700;
}

.smallWords {
    font-size: 10px;
}

.rightPhoto {
    position: relative;
    top: 10px;
}

.photo {
    width: 90px;
    height: 90px;
}

a {
    text-decoration: none;
    color: brown;
}

li {
    position: relative;
    left: 30px;
    font-size: 16px;
}
</style>