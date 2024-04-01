<template>
  <input type="text" v-model="msg" id="input" @keyup.enter="Add"><br>
  <p>{{ '你要添加的单词是 ' + msg }}</p><br>
  <div>
    <button class="btn" @click="Add">添加</button>
    <button class="btn" @click="det">删除</button>
  </div><br>
  <div>
    <p v-show="ok" :class="color" id="warn">{{ msg2 }}</p>
  </div>
  <br>
  <div>
    <table><h2 :class="color">单词列表</h2></table>
    <td>
      <li v-for="item in msg1" :key="index" :class="color">{{ item }}</li>
    </td>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      msg1: [],
      msg2: '别加啦,受不鳥啦',
      ok: false,
      color: 'colors'
    }
  },
  methods: {
    Add() {
      if (this.msg1.length < 5) {
        this.msg1.push(this.msg)
        if (this.msg1.length == 5) {
          this.ok = true
          this.color = 'color'
        }
      }
    },
    det() {
      if (this.msg1.length > 0) {
        this.msg1.pop()
        this.ok = false
        this.color = 'colors'
      }
    }
  }

}
</script>

<style>
.color {
  color: red;
}

.btn {
  width: 50px;
  height: 20px;
}

li {
  font-size: 20px;
}
p{
  font-size: 20px;
}

#warn {
  font-size: 40px;
}
#input{
  width: 200px;
  height: 30px;
}
</style>