import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () => import("../Views/Home.vue"),
      children: [
        {
          path: ":id",
          component: () => import("../Views/User.vue"),
          children: [
            {
              path: "userModule1",
              name: "userModule1",
              component: () => import("../Views/userMoudle1.vue"),
            },
            {
              path: "userModule2",
              name: "userModule2",
              component: () => import("../Views/userMoudle2.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../Views/About.vue"),
    },
  ],
});

export default router;