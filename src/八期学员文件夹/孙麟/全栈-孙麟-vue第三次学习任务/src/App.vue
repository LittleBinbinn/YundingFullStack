<template>
    <div class="hotsinger">
        <h1>热门歌手</h1>
        <div class="underline"></div>
        <div class="singer">
            <singers v-for="(singer, index) in artist" :key="index">
                <template v-slot:singerpicture>
                    <div class="singerpicture">
                        <img :src="singer.picUrl"><br>
                        {{ singer.name }}
                    </div>
                </template>
            </singers>
        </div>
        <div class="under"></div>
    </div>
    <div>
        <h1>榜单</h1>
        <div class="underline"></div>
        <div class="songs">
            <div class="song">
                <singers>
                    <template v-slot:newsong>
                        <div class="head">
                            <div class="text">
                                <h1>{{ newSong.name }}</h1>
                                <p>{{ newSong.description }}</p>
                            </div>
                            <div class="picture">
                                <img :src="newSong.coverImgUrl">
                            </div>
                        </div>
                        <div class="center"></div>
                        <div v-for="(song, index ) in newSong.tracks" :key="index" class="body">
                            {{ index + 1 }} - {{ song.name }}
                        </div>
                        <div class="c"></div>
                    </template>
                </singers>
            </div>
            <div class="song">
                <singers>
                    <template v-slot:hotsong>
                        <div class="head">
                            <div class="text">
                                <h1>{{ hotSong.name }}</h1>
                                <p>{{ hotSong.description }}</p>
                            </div>
                            <div class="picture">
                                <img :src="hotSong.coverImgUrl">
                            </div>
                        </div>
                        <div class="center"></div>
                        <div v-for="(hsong, index ) in hotSong.tracks" :key="index" class="body">
                            {{ index + 1 }} - {{ hsong.name }}
                        </div>
                        <div class="c"></div>
                    </template>
                </singers>
            </div>
            <div class="song">
                <singers>
                    <template v-slot:originsong>
                        <div class="head">
                            <div class="text">
                                <h1>{{ originSong.name }}</h1>
                                <p>{{ originSong.description }}</p>
                            </div>
                            <div class="picture">
                                <img :src="originSong.coverImgUrl">
                            </div>
                        </div>
                        <div class="center"></div>
                        <div v-for="(osong, index ) in originSong.tracks" :key="index" class="body">
                            {{ index + 1 }} - {{ osong.name }}
                        </div>
                        <div class="c"></div>
                    </template>
                </singers>
            </div>
        </div>
        <div class="under"></div>
    </div>
</template>
<script>
import singers from './components/singers.vue'
import artist from './artist.js';
import originSong from './originSong.js';
import newSong from './newSong.js';
import hotSong from './hotSong.js';

export default {
    components: {
        singers
    },
    data() {
        return {
            artist,
            originSong,
            newSong,
            hotSong
        }
    }
}
</script>