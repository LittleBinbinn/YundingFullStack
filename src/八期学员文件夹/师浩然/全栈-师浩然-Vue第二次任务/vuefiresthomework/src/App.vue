<template>
  <div>
    <h2>总价：{{ center }}当前选中的书籍：{{ books }}</h2>
    <Apphead @bookname="nowname"> </Apphead>
  </div>
</template>

<script>
import Apphead from "./components/Apphead.vue";

export default {
  components: {
    Apphead,
  },
  data() {
    return {
      center: 0,
      books: "java",
    };
  },
  methods: {
    nowname(name, price) {
      console.log(name, price);
      this.books = name;
    },
  },
};
</script>

<style></style>
