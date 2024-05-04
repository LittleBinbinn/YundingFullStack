import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('../component/Home.vue'),
            children: [
                {
                    path: 'show',
                    component:()=>import('../component/Show.vue')
                },
                {
                    path: 'choose',
                    component:()=>import('../component/Choose.vue')
                }
            ]
        },
        {
            path: '/about',
            component:()=>import('../component/About.vue')
        },
        {
            path: '/',
            redirect: '/home'
        },
    ]
})
export default router