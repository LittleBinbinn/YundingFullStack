import { createRouter, createWebHashHistory } from "vue-router"
import HomeItem from "../Views/HomeItem.vue"


const router = createRouter({
    history: createWebHashHistory(), 
   
    routes: [
        {
            path: "/",
            redirect:"/home"

        },

        {
            path: "/home",
            name:'HomeProduct',
            component: HomeItem,
            children: [
                {
                    path: "product",
                    component: () => import("../Views/HomeProduct.vue"),
                },
                {
                    path: "choose",
                    name:"HomeChoose",
                    component: () => import("../Views/homeChoose.vue"),
                    props:true
                }
            ]
        },
        {
            path: "/about",
            component: () => import ("../Views/AboutItem.vue")
        }
    ]
    
})
export default router