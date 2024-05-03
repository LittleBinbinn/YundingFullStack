<template>
  <div>
    <input type="text" v-model="msg" id="input" @keyup.enter="addMsg" >
    <ul>
      <li v-for="(item, index) in msgList" :key="index" @click="GetChoice(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const globalState = {
  msgList: []
};

export default {
  setup() {
    const router = useRouter();
    const msg = ref('');
    const msgList = ref(globalState.msgList); 
// 添加函数
    const addMsg = () => {
      msgList.value.push(msg.value);
    };
// 点击获取列表中的内容
    const GetChoice = (item) => {
      event.stopPropagation(); 
      router.push({ path: '/Choice', query: { item: item } });
    };
// 使用全局变量来储存组件内容
    onBeforeMount(() => {
      msgList.value = globalState.msgList;
    });
// 返回定义数据
    return {
      msg,
      msgList,
      addMsg,
      GetChoice
    };
  }
};
</script>




