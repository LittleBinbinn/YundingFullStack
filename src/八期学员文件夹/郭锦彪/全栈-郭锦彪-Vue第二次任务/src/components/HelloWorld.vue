<template>
  <tr v-for="list in bookList" :key="list.id">
    <td>{{ list.id }}</td>
    <td>
      <div @click="choose(list.id)" class='chanceColor'>《{{ list.name }}》</div>
    </td>
    <td>￥{{ list.price }}</td>
    <td>
      <button @click="decrease(list.id)" v-if="list.number">-</button>
      {{ list.number }}
      <button @click="increase(list.id)">+</button>
    </td>
    <td>
      <button @click="clearRow(list.id)">移除</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    bookList: {
      type: Array,
    }
  },
  emits: ['add', 'sub', 'clear','chose'],
  methods: {
    decrease(count) {
      this.$emit('sub', count)
    },
    increase(count) {
      this.$emit("add", count)
    },
    clearRow(count) {
      this.$emit('clear', count)
    },
    choose(count) {
      this.$emit('chose',count)
      // var row = document.querySelector(".ch");
      // row.style.backgroundColor='antiquewhite'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
