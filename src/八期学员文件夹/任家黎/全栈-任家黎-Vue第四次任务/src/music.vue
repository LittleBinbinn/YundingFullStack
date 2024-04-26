<template>
    <div>

        <!-- 热门歌手 -->
        <div>
            <h2>热门歌手</h2>
            <hr class="thick">
            <slot name="hot-artists"></slot>
            <hr>
        </div>

        <!-- 音乐榜单 -->
        <div>
            <h2>榜单</h2>
            <hr class="thick">
            <div class="charts">
                <!-- 新歌榜单 -->
                <div class="chart">
                    <slot name="newSongs"></slot>
                    <hr>
                </div>

                <!-- 热歌榜单 -->
                <div class="chart">
                    <slot name="hotSongs"></slot>
                    <hr>
                </div>

                <!-- 原创榜单 -->
                <div class="chart">
                    <slot name="originSongs"></slot>
                    <hr>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>


<style scoped>
.thick {
    border: 2px solid #000;
    color: #000;
}

hr {
    color: #000;
}

.charts {
    display: flex;
    flex-direction: row;
}

.chart {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 10px;
}
</style>
