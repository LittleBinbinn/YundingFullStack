
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    // 配置模式  
    history: createWebHashHistory(), // hash模式  
    // 存放映射关系  
    routes: [
        { path: "/", redirect: "/home" }, // 将默认路径重定向到home路径  
        {
            path: "/home",
            component: () => import('../views/home.vue'),
            children: [
                {
                    path: "selected",
                    component: () => import('../views/selected.vue')
                },
                {
                    path: 'list',
                    component: () => import('../views/list.vue')
                },
            ]
        },
        {
            path: "/about",
            component: () => import('../views/about.vue')
        }
    ]
})

export default router
