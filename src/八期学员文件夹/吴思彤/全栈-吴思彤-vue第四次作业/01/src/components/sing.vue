<template>
  <div>
      <div>
          <h3>热门歌手</h3>
          <div class="first">
              <slot name="part-one"></slot>
          </div>
      </div>

      <div>
          <h3>榜单</h3>
          <div>
              <div class="second">
                  <slot name="part-two"></slot>
              </div>
          </div>

      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.first {
  display: flex;
  width: 700px;
  height: 80px;
  justify-content: space-around;
  margin-left: 9px;
  padding-top: 4px;
  border-top: 2px solid rgba(21, 20, 20, 0.765);
  border-bottom: 2px solid rgba(21, 20, 20, 0.765);
  font-size: 15px;
  text-align: center;
}
.second{
  display: flex;
  justify-content: space-between;
  height: 330px;
  width: 700px;
  border-top: 2px solid rgba(21, 20, 20, 0.765);
   border-bottom: 2px solid rgba(21, 20, 20, 0.765);
  margin-left: 9px;
}
</style>