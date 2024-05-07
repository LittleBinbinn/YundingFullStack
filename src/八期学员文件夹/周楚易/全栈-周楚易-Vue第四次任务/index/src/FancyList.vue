<script>
export default {
  props:{
    items:{
      name: String,
      picUrl: URL,
    }
  }
}
</script>

<template>
  <div style="font-weight: bold; font-size: 30px">
    <slot name="title"></slot>
  </div>
  <hr>
  <div class="top-artists">
    <slot name="top-artists"></slot>
  </div>
  <hr>
  <div style="font-weight: bold; font-size: 30px">榜单</div>
  <div style="position: relative; border: 1.5px solid black; display: inline-block; width:100%; "></div>
  <div class="box">
    <div class="new-song">
      <div class="text">
        <div class="text1">
          <slot name="newTitle"></slot>
          <slot name="newContent"></slot>
        </div>
        <div class="text2" style="font-size: 30px; text-align: center; line-height: 150px; color: white">新歌榜</div>
      </div>
      <div style="position: relative; border: 1.5px solid black; display: inline-block; width: 500px; top: 5px"></div>
      <div class="new-list">
        <slot name="newList"></slot>
      </div>
      <div style="position: relative; border: 1px solid black; display: inline-block; width: 500px; top: 5px"></div>
    </div>
    <div class="hot-song">
      <div class="text">
        <div class="text1">
          <slot name="newTitle"></slot>
          <slot name="newContent"></slot>
        </div>
        <div class="text2" style="font-size: 30px; text-align: center; line-height: 150px; color: white">热歌榜</div>
      </div>
      <div style="position: relative; border: 1.5px solid black; display: inline-block; width: 500px; top: -10px"></div>
      <div class="hot-list">
        <slot name="hotList"></slot>
      </div>
      <div style="position: relative; border: 1px solid black; display: inline-block; width: 500px; top: -10px"></div>
    </div>
    <div class="origin-song">
      <div class="text">
        <div class="text1">
          <slot name="newTitle"></slot>
          <slot name="newContent"></slot>
        </div>
        <div class="text2" style="font-size: 30px; text-align: center; line-height: 150px; color: white">原创榜</div>
      </div>
      <div style="position: relative; border: 1.5px solid black; display: inline-block; width: 500px; top: -10px"></div>
      <div class="origin-list">
        <slot name="originList"></slot>
      </div>
      <div style="position: relative; border: 1px solid black; display: inline-block; width: 500px; top: -10px"></div>
    </div>
  </div>
  <div style="position: relative; border: 1.5px solid black; display: inline-block; width:100%; "></div>
</template>

<style>
.box{
  position: relative;
  width: 1600px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  left: 50%;
  margin-left: -800px;
}
.new-song {
  position: relative;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
}
.text{
  width: 500px;
  height: 150px;
  display: flex;
}
.text2{
  width: 150px;
  height: 150px;
  background-image: linear-gradient(to right top, #196e55, #a0f1e8);
}
.text1{
  flex: 1;
}
.new-list{
  flex: 1;
}
.hot-song{
  position: relative;
  width: 500px;
  height: 600px;
}
.origin-song{
  position: relative;
  width: 500px;
  height: 600px;
}
</style>