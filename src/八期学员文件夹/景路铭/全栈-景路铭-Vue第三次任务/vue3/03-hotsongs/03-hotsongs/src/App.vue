<template>
    <div class="app">
        <h4>热门歌手</h4>
        <hr>
        <singer :hotSinger="artists"></singer>
        <hr>
        <h4>榜单</h4>
        <hr>
        <div class="listFlex">
            <list :imgUrl="newSong.coverImgUrl" class="listBook">
                <template v-slot:title>{{ newSong.name}}</template>
                <template v-slot:introduce>{{newSong.description }}</template>
                <template v-slot:songlist>
                    <li v-for="(item,index) in newSong.tracks" :key="index">-{{ item.name }}</li>
                </template>
            </list>
            <list :imgUrl="hotSong.coverImgUrl" class="listBook">
                <template v-slot:title>{{ hotSong.name }}</template>
                <template v-slot:introduce>{{ hotSong.description }}</template>
                <template v-slot:songlist>
                    <li v-for="(item, index) in hotSong.tracks" :key="index">-{{ item.name }}</li>
                </template>
            </list>
            <list :imgUrl="originSong.coverImgUrl" class="listBook">
                <template v-slot:title>{{ originSong.name }}</template>
                <template v-slot:introduce>{{ originSong.description }}</template>
                <template v-slot:songlist>
                    <li v-for="(item, index) in originSong.tracks" :key="index">-{{ item.name }}</li>
                </template>
            </list>
        </div>
        <hr>

    </div>
</template>
<script>
import artists from '@/data/artist'
import singer from './components/singer.vue'
import list from './components/list.vue'
import hotSong from '@/data/hotSong'
import newSong from '@/data/newSong'
import originSong from '@/data/originSong'
export default {
    components: {
        singer,
        list
    },
    data() {
        return {
            artists: artists,
            hotSong: hotSong,
            newSong: newSong,
            originSong:originSong
        }
    }
}
</script>
<style scoped>
.listFlex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
 .listBook{
    width: 32%;
} 
</style>