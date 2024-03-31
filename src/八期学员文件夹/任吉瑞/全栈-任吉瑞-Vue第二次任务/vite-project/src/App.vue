<template>
  <div>
    <app-top :total="information" :index="index">

    </app-top>
    <table>
      <thead>
        <td>序号</td>
        <td>书名</td>
        <td>价格</td>
        <td>购买数量</td>
        <td>操作</td>
      </thead>
      <app-table :information="information" @update="update" @remove="remove" @choose="choose">
      </app-table>
      <app-add ref="AppAdd" :number="information.length+1" v-show="!factor"  @add="handleAdd"></app-add>
    </table>
      <div>
        <button @click="Change(true,0)" v-show="factor">添加</button>
        <button @click="Change(false,1)" v-show="!factor">确认</button>
        <button @click="Change(false,2)" v-show="!factor">取消</button>

      </div>
  </div>
</template>

<script>
import AppTable from "./AppTable.vue";
import AppTop from "./AppTop.vue";
import AppButton from "./AppButton.vue";
import AppAdd from "./AppAdd.vue";
export default {
  data() {
    return {
      information:[
        {
        name: "JavaScript高级程序设计",
        price: "10",
        count: 0,
        
        },
        {
          name: "vue全家桶",
          price: 30,
          count:0
        }
      ],
      factor: true,
      index:-1
    }
   },
  components: {
    AppTable,
    AppTop,
    AppButton,
    AppAdd
  },
  methods: {
    Change(a,b) {
      this.factor = !a;
      this.$nextTick(() => {
        if (b == 1) {
          this.$refs.AppAdd.addBook();
        }
      })
     
    },
    handleAdd(book) {
      this.information.push(book);
    },
    update(number,index) {
      this.information[index].count = this.information[index].count+number;
      console.log(this.information)
    }, remove(index) {
      this.information.splice(index, 1);
    },
    choose(index) {
      this.index = index;
    }
    }
    
  }
</script>

<style  scoped>

table{
  border-collapse: collapse;
}
td,th{
  border:1px solid gray;
  padding: 8px;
  text-align: center;
}
</style>