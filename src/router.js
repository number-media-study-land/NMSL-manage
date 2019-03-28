import Vue from "vue";
import Router from "vue-router";
import LogIn from "./views/login_reg/LogIn.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LogIn
    }
  ]
});
