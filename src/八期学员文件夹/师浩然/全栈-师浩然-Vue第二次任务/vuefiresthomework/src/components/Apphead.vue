<template>
  <div>
    <table class="headtable">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <!-- @click="editItem(index)" -->
      <tbody>
        <tr
          :class="{ active: index === currentindex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>
            <input
              v-if="item.editing"
              type="text"
              v-model="item.name"
              @blur="saveItem(item, index)"
            />
            <span @click="checkcoolr(index, item.name)">{{ item.name }}</span>
          </td>
          <td>
            <input
              v-if="item.editing"
              type="text"
              v-model="item.price"
              @blur="saveItem(item, index)"
            />
            <span v-else>￥{{ item.price }}</span>
          </td>
          <td>
            <button :disabled="item.quantity < 1" @click="item.quantity--">
              -1
            </button>
            {{ item.quantity }}
            <button @click="item.quantity++">+1</button>
          </td>
          <td><button @click="spilceitem(index)">移除</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="additeam">添加</button>
    <button v-if="editingItem" @click="saveiteam(editingItem, editingIndex)">
      保存
    </button>
    <button v-if="editingItem" @click="spilceitem(index)">取消</button>
    <!-- <div>价格{{ totalprice }}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "java", price: "200", quantity: 1 },
        { name: "python", price: "300", quantity: 1 },
        { name: "c++", price: "400", quantity: 1 },
      ],
      editingItem: null,
      editingIndex: null,
      current: 1,
      currentindex: 0,
    };
  },
  methods: {
    additeam() {
      this.items.push({
        name: "",
        price: "",
        quantity: 0,
        editing: true, //使得点击后该行元素变成输入框的状态
      });
      this.editingItem = this.items[this.items.length - 1];
      this.editingIndex = this.items.length - 1;
    },
    saveiteam(item, index) {
      item.editing = false; // 保存后关闭编辑状态
      this.editingItem = null;
      this.editingIndex = null;
    },
    //保存内容
    // editItem(index) {
    //   this.editingItem = this.items[index];
    //   this.editingIndex = index;
    //   this.items[index].editing = true;
    //   console.log(index);
    // },
    spilceitem(index) {
      const lastindex = this.items.length - 1;
      this.items.splice(lastindex, 1);
      this.editingItem = null;
      this.editingIndex = null;
    },
  },
  checkcoolr(index, name) {
    console.log(index, name);
    this.currentindex = index;
    this.$emit("bookname", name);
  },
  computed: {
    totalprice() {
      let price = 0;
      for (const item of this.items) {
        price += item.price * item.quantity;
      }
      return price;
    },
  },
};
</script>

<style scoped>
.headtable th,
.headtable td {
  border: 2px solid black;
  padding: 8px;
  text-align: center;
}
.headtable {
  border-collapse: collapse;
  margin: 8px;
}
.active {
  background: orange;
}
</style>
