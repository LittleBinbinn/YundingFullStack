<template>
  <tbody>
    <tr v-for="(item, index) in books" :key="item.name"
    @click="trclick(index)"
    :class="{active:index==currentindex}">
      <td>{{ index + 1 }}</td>
      <td>《{{ item.name }}》</td>
      <td>{{ formatprice(item.price) }}</td>
      <td><button v-bind:disabled="item.num <= 1" @click="decrement(index)">-</button>{{ item.num }}<button
          @click="increment(index, item)">+</button></td>
      <td>
        <button @click="remove(index)">移除</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default:()=>[]
      },
      books: {
        type: Array,
        default:()=>[]
      }
  },
  emits:["trrclick"],
  methods: {
    formatprice(price) {
      return "￥" + price;
    },
    decrement(index) {
      this.books[index].num--
    },
    increment(index, item) {
      //this.books[index].num++;
      item.num++
    },
    remove(index) {
      this.books.splice(index, 1)
    },
    // add() {
    //   this.books.push({
    //     id: this.books.length + 1,
    //     name: window.prompt(),
    //     price: window.prompt(),
    //     num: 1
    //   })
    // },
    trclick(index) {
      this.currentindex = index;
      this.$emit('trrclick',index)
    }
  },
  data() {
    return {
      currentindex:-1
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
}

th,
td {
  border: black 1px solid;
  padding: 8px 16px;
}
.active{
  background-color:pink;
}
</style>