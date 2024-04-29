import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import List from "@/pages/List.vue";
import Choose from "@/pages/Choose.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
            {
                path:'list',
                component:List
            },
            {
                path:'choose',
                component:Choose
            }
        ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
