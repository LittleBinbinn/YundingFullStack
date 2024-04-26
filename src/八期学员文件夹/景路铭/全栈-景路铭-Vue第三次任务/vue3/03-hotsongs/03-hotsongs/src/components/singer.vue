<template>
    <div class="hotsinger">
        <template v-for="(item, index) in hotSinger " :key="index">
            <div class="hotsingerFlex">
                <span>{{ item.name }}</span>
                <img :src="item.picUrl" alt="">

            </div>

        </template>

    </div>
</template>
<script>
export default {
    props:["hotSinger"],
   
}
</script>
<style scoped>
.hotsinger{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    width: 100%;
    height: 100px;
  
}
.hotsingerFlex{
    display: flex;
   flex-direction: column;
   justify-content: space-around;

}
span{
    width: 100%;
    text-align: center;
}
img{
    height: 70px;
    width: 70px;

}

</style>

