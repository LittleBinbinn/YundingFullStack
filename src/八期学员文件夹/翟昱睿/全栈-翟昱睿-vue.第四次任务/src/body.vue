    <template>
        <div class="body">
            <h2 class="text1">榜单</h2>
            <hr style="border: 2px solid black;">
            
        </div>
        <div class="bady">
            <bodypart>
                <template v-slot:textone>
                    <h2>{{ newSong.name }}</h2>
                </template>
                <template v-slot:texttwo>
                    <h3>{{ newSong.description }}</h3>
                </template>
                <template v-slot:img>
                    <img :src="newSong.coverImgUrl" class="imging" />
                </template>
                <template v-slot:song>
                    <div v-for="(song, index ) in newSong.tracks" :key="index" class="texting">
                        {{ index + 1 }}-{{ song.name }}
                    </div>
                </template>
            </bodypart>


            <bodypart>
                <template v-slot:textone>
                    <h2>{{ hotSong.name }}</h2>
                </template>
                <template v-slot:texttwo>
                    <h3>{{ hotSong.description }}</h3>
                </template>
                <template v-slot:img>
                    <img :src="hotSong.coverImgUrl" class="imging" />
                </template>
                <template v-slot:song>
                    <div v-for="(song, index ) in hotSong.tracks" :key="index" class="texting">
                        {{ index + 1 }}-{{ song.name }}
                    </div>
                </template>
            </bodypart>


            <bodypart>
                <template v-slot:textone>
                    <h2>{{ originSong.name }}</h2>
                </template>
                <template v-slot:texttwo>
                    <h3>{{ originSong.description }}</h3>
                </template>
                <template v-slot:img>
                    <img :src="originSong.coverImgUrl" class="imging" />
                </template>
                <template v-slot:song >
                    <div v-for="(song, index ) in originSong.tracks" :key="index" class="texting">
                        {{ index + 1 }}-{{ song.name }}
                    </div>
                </template>
            </bodypart>
        </div>
    </template>
    <script>
        import bodypart from './bodypart'
        import originSong from './originSong.js';
        import newSong from './newSong.js';
        import hotSong from './hotSong.js';
        import {ref} from 'vue'
        export default {
            components:{
                bodypart
            },
            setup(){
                return{
                    originSong:ref(originSong),
                    newSong:ref(newSong),
                    hotSong:ref(hotSong)
                }
            }
                
        }
    </script>
    <style scoped>
        .body{
            width: 100%;
        }
        .text1{
            font-size: 25px;
        }
        .bady{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .imging{
            width: 200px;
        }
        .texting{
            padding: 10px;
            font-size: 15px;
        }
    </style>