import { createRouter, createWebHistory  } from 'vue-router'
import Home from "@/views/Home.vue";
import HomeList from "@/views/HomeList.vue";
import HomeChosen from "@/views/HomeChosen.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home '
        },
        {
            path:'/home',
            component:Home,
            children: [
                {
                    path:'list',
                    component: () => import("../views/HomeList.vue")
                },
                {
                    path:'chosen/:name',
                    component: HomeChosen,
                    props: true
                }
            ],
        },
        {
            name: "about",
            path: "/about",
            // component:About
            component:() => import(/* webpackChunkName: "about" */"../views/About.vue")
        },

    ]
})

export default router