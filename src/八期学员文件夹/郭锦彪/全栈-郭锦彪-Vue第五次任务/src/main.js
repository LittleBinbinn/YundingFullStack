import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
localStorage.setItem('lists', ['张三', '李四', '王五'])
const app = createApp(App)
app.use(router)
app.mount('#app')

