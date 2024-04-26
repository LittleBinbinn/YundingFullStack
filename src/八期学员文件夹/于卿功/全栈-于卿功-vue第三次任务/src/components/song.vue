<template>
  <div class="box">
    <div>
      <h2>{{ title2 }}</h2>
      <p>{{ message }}</p>
    </div>
    <img :src="picture" alt="random image" />
  </div>
</template>

<script>
export default {
  props: ["title2", "message", "picture"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.box {
  height: 800px;
  display: flex;
  width: 33%;
  margin: auto;
  padding: 10px;
}
.box div {
  flex: 2;
}
img {
  width: 100px;
  height: 100px;
}
</style>