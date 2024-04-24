<template>
  <tbody>
    <tr v-for="(book, index) in books" :key="index">
      <td>{{ index + 1 }}</td>
      <td @click="tdclick(index)">{{ book.name }}</td>
      <td>{{ book.price }}</td>
      <td>
        <button v-if="books[index].num !== 0" @click="subnum(index)">
          -</button
        >{{ book.num }}<button @click="addnum(index)">+</button>
      </td>
      <td><button @click="debook(index)">移除</button></td>
    </tr>
  </tbody>
</template>

<script>
    export default {
        data() {
    return {
      books: [
        { name: "《如何获得富婆喜欢》",
          price: 6,
          num: 0,
        },
        { name: "《如何获得富婆讨厌》", price: 66, num: 0 },
        { name: "《如何找到富婆》", price: 99, num: 0 },
        { name: "《母猪的产后护理》", price: 111, num: 0 },
      ],
    };
  },
   methods: {
     debook(index){
       this.books.splice(index,1);
     },
     addnum(index) {
      this.books[index].num++;
    },
    subnum(index) {
      this.books[index].num--;
    },
     }
}
</script>

<style>
</style>