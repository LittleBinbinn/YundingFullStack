import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import List from "../components/list.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/Home.vue"),
      children: [
        {
          path: "list",
          component: () => import("../components/list.vue"),
        },
        {
          path: "selected",
          component: () => import("../components/selected.vue"),
        }
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/About.vue"),
    },
  ],
});

export default router;
