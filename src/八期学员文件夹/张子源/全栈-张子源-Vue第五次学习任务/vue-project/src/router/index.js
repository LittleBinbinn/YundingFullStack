import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/Home.vue"


const router = createRouter({
    history: createWebHashHistory(), 

    routes: [
        {
            path: "/",
            redirect:"/home"

        },

        {
            path: "/home",
            name:'List',
            component: Home,
            children: [
                {
                    path: "List",
                    component: () => import("../components/List.vue"),
                },
                {
                    path: "choose",
                    name:"yourChoose",
                    component: () => import("../components/yourChoose.vue"),
                    props:true
                }
            ]
        },
        {
            path: "/about",
            component: () => import ("../components/About.vue")
        }
    ]

})

export default router