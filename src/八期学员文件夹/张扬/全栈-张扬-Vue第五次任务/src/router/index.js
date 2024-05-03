import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import Module from '../views/Module.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "show",
          name: "show",
          component: () => import("../views/ShowView.vue"),
        },
        {
          path: "option",
          name: "option",
          component: () => import("../views/OptionView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "List",
          name: "List",
          component: () => import("../views/List.vue"),
          children: [
            {
              path: "Module",
              name: "Module",
              component: Module,
            }
          ],
        },
      ],
    },
  ],
});

export default router
