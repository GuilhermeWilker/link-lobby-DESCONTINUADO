import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/collections",
      name: "collections",
      component: () => import("../views/CollectionView.vue"),
    },
    {
      path: "/collection/:index",
      component: () => import("../views/LinksView.vue"),
      props: true,
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
