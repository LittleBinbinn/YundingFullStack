<template>
  <tbody>
    <tr v-for="(item, index) in message" :class='{col: index == thisid}'>
      <td>{{ index + 1 }}</td>
      <td @click="isclick(index)">{{ message[index].name }}</td>
      <td>{{ message[index].price }}</td>
      <td>
        <button @click="decreasecount(index)" :disabled="message[index].count <= 0">-</button>
        <span>{{ message[index].count }}</span>
        <button @click="increasecount(index)">+</button>
      </td>
      <td>
        <button @click="deletebook(index)">移除</button>
      </td>
    </tr>
    <tr :class="{ hide: hideit }">
      <td>{{ message.length + 1 }}</td>
      <td><input type="text" v-model="bookname"></td>
      <td><input type="number" v-model="bookprice"></td>
      <td>
        <button @click="minusnumber" :disabled="number <= 0">-</button>
        <span>{{ number }}</span>
        <button @click="addnumber">+</button>
      </td>
      <td><button @click="deletebook(index)" class="display:none;" disabled>移除</button></td>
    </tr>
  </tbody>
  <button @click="addbook" :class="{ hide: showit }">添加</button>
  <button @click="submit" :class="{ hide: hideit }">确认</button><button @click="quit"
    :class="{ hide: hideit }">取消</button>

</template>
<!-- name -->
<script>
export default {
  emits:['isclick'],
  props: ['message'],
  data() {
    return {
      bookname: '',
      bookprice: 0,
      number: 0,
      hideit: true,
      showit: false,
      thisid: -1
    }
  },
  methods: {
    
    addbook() {
      this.hideit = false
      this.showit = true
    },
    increasecount(index) {
      this.message[index].count++
    },
    decreasecount(index) {
      this.message[index].count--
    },
    deletebook(index) {
      this.message.splice(index, 1)
    },
    isclick(index) {
      this.$emit('isclick', index)
      this.thisid = index
    },
    addnumber() {
      this.number++
    },
    minusnumber() {
      this.number--
    },
    submit() {
      if (this.bookname === '') {
        alert('书名不能为空')
      } else if (this.bookprice === 0) {
        alert('价格不能为0')
      } else {
        this.hideit = true
        this.showit = false
        this.message.push({
          id: this.message.length + 1,
          name: '《' + this.bookname + '》',
          price: this.bookprice,
          count: this.number
        })
      }
    },
    quit() {
      this.hideit = true
      this.showit = false
    }
  }
}
</script>

<style scoped>
tr {
  text-align: center;
}

td {
  border: 1px solid #aaa;
  padding: 8px 16px;
}

.hide {
  display: none;
}

.col {
  color: red
}
</style>