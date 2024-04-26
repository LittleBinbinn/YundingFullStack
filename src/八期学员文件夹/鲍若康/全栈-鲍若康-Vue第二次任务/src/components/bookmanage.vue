<template>
  <tbody>
    <tr v-for="(item, index) in booklist" :key="item" :class="{red:index==clickindex}">
      <td>{{ index + 1 }}</td>
      <td @click="show(index)">{{ item.name }}</td>
      <td>￥ {{ item.price }}</td>
      <td>
        <button :disabled="item.count<1" @click="del(index)">-</button>
        {{ item.count}}
        <button @click="add(index)">+</button>
      </td>
      <td>
        <button @click="remove(index)">移除</button>
      </td>

    </tr>
      <tr :class="{hide: showsign }">
        <td>{{ booklist.length+1 }}</td>
        <td><input type="text" v-model="newname"></td>
        <td><input type="number" v-model="newprice"></td>
        <td>
          <button :disabled="number < 1" @click="newdel">-</button>
          {{ number }}
          <button @click="newadd">+</button>
        </td>
        <td>
          <button disabled>移除</button>
        </td>
      </tr>
    </tbody>
  <div >
    <button @click="addbtn" :class="{ hide: hidesign }">添加</button>
  </div>
  <div :class="{ hide: showsign }">
    <button @click="admit">确认</button>
    <button @click="cancel">取消</button>
  </div>

</template>

<script>

export default {
  emits: ['admit','addbtn','newdel','add','del','show','remove','newadd','cancel'],
  props:["booklist"],
  data() {
    return {
      clickindex: -1,
      number: 1,
      newname:'',
      newprice: 1,
      showsign: true,
      hidesign: false
    }
  },
  methods: {
    add(index) {
      this.booklist[index].count++
      
    },
    del(index) {
      this.booklist[index].count--
      
    },
    show(index) {
      this.$emit("show", index)
      this.clickindex=index
      
    },
    remove(index) {
      this.booklist.splice(index,1)
    },
    newadd() {
      
      this.number++
    },
    newdel() {
      this.number--
    },
    addbtn() {
      this.showsign = false
      this.hidesign = true
    },
    admit() {
      if (this.newname =='') {
        alert("书名不能为空")
      }
      else if (this.newprice < 1) {
        alert("价格必须是正数")
      }
      else {
        this.booklist.push({
          id: 5,
          name: this.newname,
          price: this.newprice,
          count: 1,
        });
        this.showsign = true
        this.hidesign = false
      }
    },
    cancel() {
      this.showsign = true
      this.hidesign = false
    }
    }
  }
 

</script>
<style scoped>
td {
  border: 1px solid #aaa;
  padding: 8px 16px;
}
.red{
  background-color: rgb(245, 128, 92);
}

.hide{
  display: none;
}
</style>
