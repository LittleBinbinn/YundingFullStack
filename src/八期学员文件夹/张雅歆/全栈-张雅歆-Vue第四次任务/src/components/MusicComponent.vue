<template>
    <div class="music-component">
        <div class="singer">
            <ListComponent title="热门歌手" :class="'artist-list-container'">
                <template v-slot>
                    <h2>热门歌手</h2>
                    <div class="artist-item" v-for="artist in artists" :key="artist.id">
                        <img :src="artist.picUrl" :alt="artist.name" class="artist-cover" />
                        <div class="artist-info">
                            <h3>{{ artist.name }}</h3>
                        </div>
                    </div>
                </template>
            </ListComponent>
        </div>
        <h2>榜单</h2>
        <div class="ranking">

            <ListComponent title="新歌榜" :class="'song-list-container'">
                <template v-slot>
                    <div class="background">
                        <img :src="newSongInfo.coverImgUrl" :alt="newSongInfo.name" class="background-image" />
                        <div class="description">
                            {{ newSongInfo.description }}
                        </div>
                    </div>
                    <ul class="song-list">
                        <li v-for="(song, index) in newSongInfo.tracks" :key="song.id">
                            <span class="rank-number">{{ index + 1 }}.</span>
                            <img :src="song.picUrl" :alt="song.name" class="song-cover" />
                            <div class="song-info">
                                <h3>{{ song.name }}</h3>
                            </div>
                        </li>
                    </ul>
                </template>
            </ListComponent>

            <ListComponent title="热歌榜" :class="'song-list-container'">
                <template v-slot>
                    <div class="background">
                        <img :src="hotSongs.coverImgUrl" :alt="hotSongs.name" class="background-image" />
                        <div class="description">
                            {{ hotSongs.description }}
                        </div>
                    </div>
                    <ul class="song-list">
                        <li v-for="(song, index) in hotSongs.tracks" :key="song.id">
                            <span class="rank-number">{{ index + 1 }}.</span>
                            <img :src="song.picUrl" :alt="song.name" class="song-cover" />
                            <div class="song-info">
                                <h3>{{ song.name }}</h3>
                            </div>
                        </li>
                    </ul>
                </template>
            </ListComponent>

            <ListComponent title="原创榜" :class="'song-list-container'">
                <template v-slot>
                    <div class="background">
                        <img :src="originSongs.coverImgUrl" :alt="originSongs.name" class="background-image" />
                        <div class="description">
                            {{ originSongs.description }}
                        </div>
                    </div>
                    <ul class="song-list">
                        <li v-for="(song, index) in originSongs.tracks" :key="song.id">
                            <span class="rank-number">{{ index + 1 }}.</span>
                            <img :src="song.picUrl" :alt="song.name" class="song-cover" />
                            <div class="song-info">
                                <h3>{{ song.name }}</h3>
                            </div>
                        </li>
                    </ul>
                </template>
            </ListComponent>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ListComponent from "./ListComponent.vue";
import artists from "@/data/artist";
import initialNewSongs from "@/data/newSong";
import initialHotSongs from "@/data/hotSong";
import initialOriginSongs from "@/data/originSong";

const newSongInfo = ref({
    name: "新歌榜",
    coverImgUrl: "https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg",
    description: "云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行）官方TOP排行榜，每天更新。",
    tracks: initialNewSongs.tracks,
});

const hotSongs = ref({
    name: "热歌榜",
    coverImgUrl: "https://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg",
    description: "云音乐热歌榜：云音乐用户一周内收听所有线上歌曲官方TOP排行榜，每日更新。",
    tracks: initialHotSongs.tracks,
});

const originSongs = ref({
    name: "原创榜",
    coverImgUrl: "https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg",
    description: "云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。",
    tracks: initialOriginSongs.tracks,
});

onMounted(() => {
    // 
});  
</script>

    
<style scoped>
.music-component {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.list-container {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.list-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.list-item:last-child {
    border-bottom: none;
}

.list-cover {
    object-fit: cover;
    margin-right: 10px;
}

.list-info {
    flex-grow: 1;
}

.rank-number {
    margin-right: 10px;
    font-weight: bold;
    color: #333;
}

.song-list-container {
    width: 100%;
}

.song-list {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

.song-cover {
    width: 50px;
    height: 50px;
}

.artist-list-container {
    white-space: nowrap;
    overflow-x: auto;
}

.artist-item {
    display: inline-block;
    vertical-align: top;
    font-size: 1rem;
    margin-bottom: 10px;
    margin-right: 50px;
}

.artist-item:last-child {
    margin-right: 0;
}

.artist-cover {
    width: 100px;
    height: 80px;
}

.background {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.background-image {
    width: 100%;
    height: auto;
    display: block;
}

.description {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    color: #666;
    text-align: center;
}

.ranking {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.song-cover {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
}
</style>
