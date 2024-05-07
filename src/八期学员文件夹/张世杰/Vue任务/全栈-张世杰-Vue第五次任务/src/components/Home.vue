<template>  
  <div>  
    <h1>我是home组件</h1>  
    <ul>  
      <li v-for="(item, index) in events" :key="index" @click="selectedEvent = item">  
        {{ item }}  
      </li>  
    </ul>  
    <input v-model="newEvent" @keyup.enter="addEvent" placeholder="输入新事件" />  
    <button @click="showSelectedEvent">展示你的选择</button>  
    <p v-if="selectedEvent">{{ selectedEvent }}</p>  
  </div>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      events: ['吃饭', '睡觉', '打豆豆'],  
      newEvent: '',  
      selectedEvent: null  
    };  
  },  
  methods: {  
    addEvent() {  
      if (this.newEvent) {  
        this.events.push(this.newEvent);  
        this.newEvent = '';  
      }  
    },  
    showSelectedEvent() {  
      if (!this.selectedEvent) {  
        alert('请先选择一个事件！');  
      }  
    }  
  }  
};  
</script>