import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../home.vue'
import about from '../about.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'infomation',
                    component: () =>import('../HomeComponent/infoShow.vue')
                },
                {
                    path: 'mychoice',
                    component: () =>import('../HomeComponent/myChoice.vue')
                },
            ]
        },
        {
            path: '/about',
            component: about
        },
        {  
            path: '/', // 添加根路径路由  
            component: Home  
        },  
    ]
})
export default router