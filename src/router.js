import Vue from "vue";
import Router from "vue-router";
import LogIn from "./views/login_reg/LogIn.vue";
import Manage from "./views/Manage.vue";
import Home from "./views/home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LogIn
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        }
      ]
    }
  ]
});
