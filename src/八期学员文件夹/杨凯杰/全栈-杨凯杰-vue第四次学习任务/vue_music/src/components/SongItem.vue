<template>
    <SongList :hotSong="hotSong" :newSong="newSong" :originSong="originSong">
        <template #newsong>
            <div class="introduce">
                <div class="description-img">
                    <div class="description">
                        <h2>{{ newSong.name }}</h2>
                        <p>{{ newSong.description }}</p>
                    </div>
                    <img :src="newSong.coverImgUrl" alt="新歌">
                </div>
               
                <hr>
                <div class="newsongs song">
                    <div class="newsong-item" v-for="n in newSong.tracks" :key="n.id">
                        <a :href="n.picUrl"> {{ n.id }} - {{ n.name }}</a>
                    </div>
                </div>
            </div>        
        </template>
        <template #hotsong>
            <div class="introduce">
                <div class="description-img">
                    <div class="description">
                        <h2>{{ hotSong.name }}</h2>
                        <p>{{ hotSong.description }}</p>
                    </div>
                    <img :src="hotSong.coverImgUrl" alt="新歌">
                </div>      
                <hr>
                <div class="hotsongs song">
                    <div class="hotsong-item" v-for="h in hotSong.tracks" :key="h.id">
                        <a :href="h.picUrl"> {{ h.id }} - {{ h.name }}</a>
                    </div>
                </div>
             </div>

        </template>
        <template #originsong>
            <div class="introduce">
                <div class="description-img">
                    <div class="description">
                        <h2>{{ originSong.name }}</h2>
                        <p>{{ originSong.description }}</p>
                    </div> 
                    <img :src="originSong.coverImgUrl" alt="新歌">
                </div>       
                <hr>
                <div class="originsongs song">
                    <div class="originsong-item" v-for="o in originSong.tracks" :key="o.id">
                        <a :href="o.picUrl"> {{ o.id }} - {{ o.name }}</a>
                    </div>
                </div>
            </div>         
            
        </template>
    </SongList>
</template>


<script setup>
    import SongList from './SongList.vue'
    import newSong from '@/newSong'
    import hotSong from '@/hotSong'
    import originSong from '@/originSong';
    
   
</script>
<style scoped>
h2 + p {
    text-align:left;
}

.song{
    display: flex;
    flex-flow: column;
    text-align: center;
}
.description-img{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.description-img img{
    width: 40%;
   
}
.introduce{
    width:400px;
   
}
a:hover{
    color: green;
    text-decoration: none;
}

</style>