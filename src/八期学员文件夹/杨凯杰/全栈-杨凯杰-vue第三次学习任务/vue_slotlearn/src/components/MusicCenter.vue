<template>
    <div>
        <h2>{{ ranklist }}</h2>
        <hr>

        <MusicList :newSongs="newSongs" :hotSongs="hotSongs" :originSongs="originSongs">
            <template #newsong>
                <div class="introduce">
                    <h2>{{ newSongs.name }}</h2>
                    <p>{{ newSongs.description }}</p>
                    <img :src="newSongs.coverImgUrl" alt="新歌">
                    <hr>
                </div>
                <ul>
                    <li v-for="newSong in newSongs.tracks" :key="newSong.id">
                        <a :href="newSong.picUrl"> {{ newSong.id }} - {{ newSong.name }}</a>
                    </li>
                </ul>
            </template>
            <template #hotsong>
                <div class="introduce">
                    <h2>{{ hotSongs.name }}</h2>
                    <p>{{ hotSongs.description }}</p>
                    <img :src="hotSongs.coverImgUrl" alt="老歌">
                    <hr>
                </div>
                <ul>
                    <li v-for="hotSong in hotSongs.tracks" :key="hotSong.id">
                        <a :href="hotSong.picUrl"> {{ hotSong.id }} - {{ hotSong.name }}</a>
                    </li>
                </ul>
            </template>
            <template #originsong>
                <div class="introduce">
                    <h2>{{ originSongs.name }}</h2>
                    <p>{{ originSongs.description }}</p>
                    <img :src="originSongs.coverImgUrl" alt="老歌">
                    <hr>
                </div>
                <ul>
                    <li v-for="originSong in originSongs.tracks" :key="originSong.id">
                        <a :href="originSong.picUrl"> {{ originSong.id }} - {{ originSong.name }}</a>
                    </li>
                </ul>
            </template>
        </MusicList>
    </div>
</template>


<script>

import MusicList from './MusicList.vue'


export default {
    name: 'MusicCenter',
    components: { MusicList },
    data() {
        return {
            ranklist: '榜单',
            newSongs: {
                name: "新歌榜",
                coverImgUrl:
                    "https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg",
                description:
                    "云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。",

                tracks: [
                    {
                        id: 1,
                        name: "アイドル",
                        picUrl:
                            "http://p3.music.126.net/4EQzPt4OaZraiSCRGpINwQ==/109951168506561762.jpg",
                    },
                    {
                        id: 2,
                        name: "声音",
                        picUrl:
                            "http://p3.music.126.net/eble6u8GXivcHyZ9PS6P0w==/109951168475709963.jpg",
                    },
                    {
                        id: 3,
                        name: "身骑白马",
                        picUrl:
                            "http://p3.music.126.net/iEdL_IAsaIRwNX10HtNsGg==/109951168540070885.jpg",
                    },
                    {
                        id: 4,
                        name: "明天",
                        picUrl:
                            "http://p3.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg",
                    },
                    {
                        id: 5,
                        name: "Slow",
                        picUrl:
                            "http://p4.music.126.net/pC6aJUZMTRe_rD_6t_EbYw==/109951168548837659.jpg",
                    },
                    {
                        id: 6,
                        name: "雨过天不晴",
                        picUrl:
                            "http://p3.music.126.net/5bqKKSxhI2w-LCicrqZPvg==/109951168483915678.jpg",
                    },
                    {
                        id: 7,
                        name: "芯房",
                        picUrl:
                            "http://p3.music.126.net/E1RzJTmi-qCYAUQ9a1khhw==/109951168536334922.jpg",
                    },
                    {
                        id: 8,
                        name: "床",
                        picUrl:
                            "http://p3.music.126.net/I7iZevCpkwfCj75KrNUkLw==/109951168511501593.jpg",
                    },
                    {
                        id: 9,
                        name: "冠军情歌",
                        picUrl:
                            "http://p4.music.126.net/rYPlv-TJno4hbxEMT7se1Q==/109951168520849181.jpg",
                    },
                    {
                        id: 10,
                        name: "迷宫",
                        picUrl:
                            "http://p3.music.126.net/KA4OfYKYT1b_3W94CIrwDg==/109951168500881027.jpg",
                    },
                ],
            },

                hotSongs: {

                    name: "热歌榜",
                    coverImgUrl:
                        "https://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg",

                    description:
                        "云音乐热歌榜：云音乐用户一周内收听所有线上歌曲官方TOP排行榜，每日更新。",

                    tracks: [
                        {
                            id:1,
                            name: "雪 Distance",
                            picUrl:
                                "http://p3.music.126.net/cGTKkFl5qcXIDYPo7PrmDA==/109951168431655039.jpg",
                        },
                        {
                            id:2,
                            name: "我记得",
                            picUrl:
                                "http://p4.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg",
                        },
                        {
                            id:3,
                            name: "把回忆拼好给你",
                            picUrl:
                                "http://p4.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg",
                        },
                        {
                            id:4,
                            name: "精卫",
                            picUrl:
                                "http://p3.music.126.net/jSH_ikeooxveWl0BTc3Xkg==/109951166786983190.jpg",
                        },
                        {
                            id:5,
                            name: "姑娘在远方",
                            picUrl:
                                "http://p4.music.126.net/69MfQfl-rA0IwEuRSCEyNw==/109951168307420773.jpg",
                        },
                        {
                            id:6,
                            name: "我的美丽feat.海洋Bo",
                            picUrl:
                                "http://p4.music.126.net/8ZpCzo4gEeCAQyXAGYXKUQ==/109951167854450663.jpg",
                        },
                        {
                            id:7,
                            name: "可能",
                            picUrl:
                                "http://p3.music.126.net/Lk26KqRDPVbbhB4rQRGnPw==/109951167570919875.jpg",
                        },
                        {
                            id:8,
                            name: "在你的身边",
                            picUrl:
                                "http://p3.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg",
                        },
                        {
                            id:9,
                            name: "若把你",
                            picUrl:
                                "http://p3.music.126.net/M877M2-VhWZiLPVFORf9iQ==/109951163401482434.jpg",
                        },
                        {
                            id:10,
                            name: "唯一",
                            picUrl:
                                "http://p4.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
                        },
                    ],
                },


                originSongs:{
                    name: "原创榜",
                    coverImgUrl:
                        "https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg",
                    description:
                        "云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/",

                    tracks: [
                        {
                            id: 1,
                            name: "床",
                            picUrl:
                            "http://p4.music.126.net/I7iZevCpkwfCj75KrNUkLw==/109951168511501593.jpg",
                            
                        },
                        {
                            id:2,
                            name: "经典",
                            picUrl:
                            "http://p3.music.126.net/AtAQp5otTEpV2g3ZqDwxMg==/109951168526909690.jpg",
                            
                        },
                        {
                            id:3,
                        name: "现在 你才不幸福",
                        picUrl:
                            "http://p4.music.126.net/KTly-GTkaN8zIRBty1Mu5w==/109951168526933052.jpg",
                            
                        },
                        {
                            id:4,
                        name: "烟花之下",
                        picUrl:
                            "http://p4.music.126.net/VWMi9irDb-PjhV-EZLwQ4A==/109951168518175925.jpg",
                            
                        },
                        {
                            id:5,
                        name: "夏日痛哭企画",
                            picUrl:
                            "http://p4.music.126.net/kiwaVxpALXeg7hS7WOmu5g==/109951168521336352.jpg",
                            
                        },
                        {
                            id:6,
                        name: "9.26",
                            picUrl:
                            "http://p3.music.126.net/Ws93IUrJGR_lK-QEsdKTWw==/109951168408373477.jpg",
                        
                        },
                        {
                            id:7,
                        name: "戒烟报告",
                        picUrl:
                            "http://p3.music.126.net/Z3zT0QJmMdsXGwPxRHERpg==/109951168521704224.jpg",
                            
                        },
                        {
                            id:8,
                        name: "8Hz",
                            picUrl:
                            "http://p4.music.126.net/8QJxoxLVT4tBF41Teb8V3w==/109951168543743744.jpg",
                            
                        },
                        {
                            id:9,
                        name: "人间指南",
                        picUrl:
                            "http://p4.music.126.net/rSujVcQRdmk7eE5BwystJQ==/109951168536015065.jpg",
                            
                        },
                        {
                            id:10,
                        name: "别哭了吧",
                        picUrl:
                            "http://p4.music.126.net/IDA6y2GJgUZ8L5jwRU8pgg==/109951168526860760.jpg",
                            
                        },
                    ],
        }


            ,
        }
    }
}     
</script>
<style scoped>
.introduce{
    width: 100%;
    text-align: left;
}

.introduce img{width: 30%;}
</style>