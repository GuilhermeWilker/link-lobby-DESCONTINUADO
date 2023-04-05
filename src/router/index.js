import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase";
import HomeView from "../views/HomeView.vue";

const requireAuth = (to, from, next) => {
  const user = supabase.auth.user();
  if (!user) {
    next({ name: "home" });
  } else {
    next();
  }
};

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
      beforeEnter: requireAuth,
    },
    {
      path: "/collection/:index",
      component: () => import("../views/LinksView.vue"),
      props: true,
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
