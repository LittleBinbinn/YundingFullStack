<template>
    <div class="back">
        <div class="left">
            <h2>{{ title }}</h2>
            <p>{{ songText }}</p>

        </div>
        <img :src=" songImg " alt="">

    </div>

</template>

<script>
export default {
    props: ["title","songText","songImg"]
}
</script>

<style>
.back{
    display: flex;
    margin-bottom: 30px;
    margin-left: 10px;
}
.left{
    display: flex;
    width: 280px;
    flex-direction: column;
}
img{
    width: 140px;
    height: 140px;
    margin-left: 100px;
}
p{
    margin-top: -20px;
}
h2{
    font-size: 35px;
    margin-top: 0px;
}
</style>