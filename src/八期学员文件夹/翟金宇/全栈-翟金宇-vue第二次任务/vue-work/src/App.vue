<template>
  <table>
    <v-header></v-header>
    <content :message="message" @isclick="isclick"></content>
  </table>
  <div>总价：{{ total }},当前选中书籍{{ nowbook }}</div>
</template>

<script>
import vHeader from "./components/header.vue"
import content from "./components/content.vue"
export default {
  components: {
    vHeader,
    content
  },
  data() {
    return {
      nowbook: "",
      num: 0,
      message: [
        {
          id: 1,
          name: "《JavaScript高级程序设计》",
          price: 126,
          count: 1,
        },
        {
          id: 2,
          name: "《你不知道的js（上卷）》",
          price: 78,
          count: 1,
        },
        {
          id: 3,
          name: "《你不知道的js（中卷）》",
          price: 76,
          count: 1,
        },
        {
          id: 4,
          name: "《你不知道的js（下卷）》",
          price: 64,
          count: 1,
        }
      ]
    }
  },
  methods: {
    isclick(index) {
      this.nowbook = this.message[index].name
    },
  },
  computed: {
    total() {
      return this.message.reduce((tprice, item) => tprice + item.price * item.count, 0)
    }
  }
}
</script>

<style scoped></style>