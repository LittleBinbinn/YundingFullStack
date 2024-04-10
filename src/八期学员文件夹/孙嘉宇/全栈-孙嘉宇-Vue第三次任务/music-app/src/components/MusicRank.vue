<template>
    <div class="rankBox">
        <div class="title">
            <slot name="title">
                <!-- <h2>此处应显示榜单名字</h2> -->
            </slot>
        </div>
        <div class="introduction">
            <slot name="introduction">
                <!-- <h2>此处应显示榜单介绍</h2> -->
            </slot>
        </div>
        <div class="rankPic">
            <slot name="rankPic">
            </slot>
        </div>
        <div class="list">
            <slot name="rank">
                <!-- <h2>此次应显示音乐榜单</h2> -->
            </slot>
        </div>
    </div>
</template>
<script>

export default {
    name: "musicRank",
    props:[],
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.rankBox {
    border-top:2px solid black;
    border-bottom: 2px solid black;
    flex:1;
    display: flex;
    flex-direction: column;
    position: relative;
}
.title{
    flex:1;
    width: 100px;
    height: 20px;
    /* background-color: pink; */
    font:700 20px black;
    margin-top: 10px;
}
.introduction {
    width: 80px;
    height: 40px;
    flex: 2;
    font-size: 10px;
    color: rgb(130, 126, 126);
    /* display: inline-block; */
    margin-top:-15px;
}
.rankPic{
    display: inline-block;
    position: absolute;
    top:15px;
    right:10px;
}
.list{
    border-top:2px solid black;
    border-bottom: 2px solid black;
    /* margin:10px; */
    margin-left:0px;
    margin-right:10px;
    margin-bottom: 10px;
    flex:5;
}

</style>