
import router from '../src/router/index'
import { createApp } from 'vue'
import App from './App.vue'
import store from "../src/store/index"
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')