<template>
    <tr v-for="(item,index) in list" :key="index">
      <td>{{index+1}}</td>
      <td>{{ item.bookName }}</td>
      <td>{{ item.price }}</td>
      <td><button :class="item.num == 1? 'is-disabled': ''" @click="subNumber(index)">-</button>{{ item.num }}<button @click="addNumber(index)">+</button></td>
      <td><button @click="del(index)">移除</button></td>
    </tr>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          bookName: "《你不知道的JavaScript上》",
          price: "50",
          num: 1
        },
        {
          bookName: "《你不知道的JavaScript中》",
          price: "60",
          num: 1
        },
        {
          bookName: "《你不知道的JavaScript下》",
          price: "70",
          num: 1
        },
        {
          bookName: "《JAVA》",
          price: "100",
          num: 1
        },
      ]
    }
  },
  methods: {
    del(index) {
      this.list.splice(index, 1);
    },
    subNumber(index) {
      if (this.list[index].num == 1) {
        return
      } else {
        this.list[index].num -= 1
      }
    },
    addNumber(index) {
      this.list[index].num += 1
    },
  }
}
</script>

<style>
  .is-disabled {
    cursor: not-allowed;
  }
</style>