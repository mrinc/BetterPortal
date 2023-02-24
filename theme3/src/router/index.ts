import { createRouter, createWebHistory } from "vue-router";
import DefaultPageNotFound from "../views/DefaultPageNotFound.vue";
import DefaultLayout from "../layouts/default.vue";
//import Login from "../views/Login.vue";
//import Client from "../views/Client.vue.txt";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: "/login",
      name: "login-redirect",
      redirect: (to) => {
        //console.log("login page");
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return {
          path: '/Account/Login',
          query: {
            logout: to.query.logout,
            oauth: to.query.oauth,
            client_id: to.query.client_id,
            redirect_uri: to.query.redirect_uri,
            scope: to.query.scope,
            scopes: to.query.scopes,
            response_type: to.query.response_type,
            response_mode: to.query.response_mode,
            code_challenge_method: to.query.code_challenge_method,
            code_challenge: to.query.code_challenge,
            state: to.query.state,
            nonce: to.query.nonce,
            rtoken: to.query.rtoken,
            otp: to.query.otp,
            email: to.query.email,
          },
        };
      },
    },*/
    /*{
      path: "/",
      name: "home",
      component: DefaultLayout,
      meta: { content: import("../views/profile.vue") },
    },*/
    {
      path: "/App/UnknownApp",
      name: "UnknownApp",
      component: DefaultLayout,
      meta: { content: DefaultPageNotFound },
    },
    // {
    //   path: "/Account/Login",
    //   name: "login",
    //   component: DefaultLayout,
    //   meta: {
    //     content: Login,
    //     breadcrumbs: ["Account", "Login"],
    //     lockedScroll: true,
    //   },
    // },
    // {
    //   path: "/Account/Client",
    //   name: "client",
    //   component: DefaultLayout,
    //   meta: {
    //     content: Client,
    //     breadcrumbs: ["Account", "Client"],
    //     lockedScroll: true,
    //   },
    // },
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
      meta: { content: DefaultPageNotFound },
    },
  ],
});

export default router;
