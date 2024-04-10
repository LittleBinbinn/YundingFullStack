<template>
  <div class="total">
    <!-- <total-price></total-price> -->
    <books :books="books"></books>
    <!-- <add-book :books = "books"></add-book> -->
  </div>
</template>

<script>
import totalPrice from "./components/totalPrice.vue";
import Books from "./components/books.vue";

export default {
  data() {
    return {
      all: 0,
      bookk: "",
      currentIndex: -1,
      books: [
        {
          id: 1,
          book: "JavaScript高级程序设计",
          price: 126.0,
          count: 1,
        },
        {
          id: 2,
          book: "你不知道的JS(上卷)",
          price: 78.0,
          count: 1,
        },
        {
          id: 3,
          book: "你不知道的JS(中卷)",
          price: 76.0,
          count: 1,
        },
        {
          id: 4,
          book: "你不知道的JS(下卷)",
          price: 64.0,
          count: 1,
        },
      ],
    };
  },
  components: {
    // totalPrice,
    Books,
  },
};
</script>

<style>
</style>