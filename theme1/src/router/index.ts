import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from "../layouts/default.vue";
import Login from "../views/Login.vue";
import Client from "../views/Client.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultLayout,
      meta: { content: HomeView },
    },
    {
      path: "/App/Login",
      name: "login",
      component: DefaultLayout,
      meta: {
        content: Login,
        breadcrumbs: ["App", "Login"],
        lockedScroll: true
      },
    },
    {
      path: "/App/Client",
      name: "client",
      component: DefaultLayout,
      meta: {
        content: Client,
        breadcrumbs: ["App", "Login", "Client"],
        lockedScroll: true
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DefaultLayout,
      meta: { content: import("../views/AboutView.vue") },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: DefaultLayout,
      meta: { content: HomeView },
    },
  ],
});

export default router;
