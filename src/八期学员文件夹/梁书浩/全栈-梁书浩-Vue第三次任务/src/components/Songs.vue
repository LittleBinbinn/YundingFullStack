<template>
    <div class="songCube">
        <div class="box">
            <div class="listname">
                <slot name="ListName"></slot>
            </div>
            <div class="Listintroduction">
                <slot name="Listintroduction"></slot>
            </div>
            <div class="picture">
                <slot name="picture"></slot>
            </div>
        </div>
        <div class="song">
            <slot name="song"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.songCube {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-bottom: none;
}

.box {
    border-bottom: 4px solid black;
    margin-right: 8px;
}

.listname {
    margin-top: 4px;
    font-weight: bolder;
    font-size: 18px;
}

.Listintroduction {
    height: 90px;
    font-size: 13px;
    margin-right: 150px;
    margin-top: 10px;
}

.picture {
    position: absolute;
    right: 50px;
    top: 20px;
}

.song {
    font-size: 18px;
    border-bottom: 2px solid rgb(0, 0, 0);
    margin-right: 8px;
}
</style>