//引入createApp用于创建应用
import { createApp } from "vue";
//引入App根组件
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') 