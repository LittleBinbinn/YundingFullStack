<script setup lang="ts">
// import hhqsaz from './components/heiHei.vue'
import { onMounted } from "vue";
let rain: Function;
onMounted(() => {
  let arr: string[] = "scsdwx01ascdvwfrebgrnhm".split("");
  const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  const div = document.querySelector(".region");
  const Arr: number[] = Array(Math.floor(div!.clientWidth / 10)).fill(0);
  canvas.width = div!.clientWidth;
  canvas.height = div!.clientHeight;
  const ctx = canvas.getContext("2d")!;

  console.log(ctx.fillStyle, ctx.fillStyle === "#000000");
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  console.log(ctx.fillStyle, ctx.fillStyle === "#000000");
  console.log(ctx);
  ctx!.fillRect(0, 0, canvas.width, canvas.height);
  ctx!.strokeStyle = "#10f";

  rain = () => {
    // ctx!.fillStyle = 'rgba(1,1,1,0.01)'
    Arr.forEach((item, index) => {
      ctx!.strokeText(
        arr[Math.floor(Math.random() * arr.length)],
        index * 10,
        item + 10
      );
      Arr[index] =
        item > canvas.height || item > Math.random() * 6000 ? 0 : item + 10;
    });
    ctx.fillStyle = "rgba(0,0,0,0.04)";
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
  };
  setInterval(rain, 40);
});
</script>

<template>
  <div class="region">
    <canvas></canvas>
  </div>
</template>

<style lang="scss">
.region {
  width: 1000px;
  height: 800px;
  background-color: rgb(255, 158, 190);
}
</style>
