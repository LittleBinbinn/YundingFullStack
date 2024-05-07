import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/Views/Home.vue";


//创建一个路由
const router = createRouter({
    //制定采用的模式:hash
    history: createWebHashHistory(),
    //映射关系
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            name:"home",
            path: "/home",
            component: () => import("@/Views/Home.vue"),
            children: [
                {
                    path: "select",
                    component: () => import("@/Views/Select.vue")
                },
                {
                    path: "list",
                    component: () => import("@/Views/List.vue")
                }
            ]
        },
        {
            path: "/about",
            component: () => import("@/Views/About.vue")
        }
    ]
})

export default router