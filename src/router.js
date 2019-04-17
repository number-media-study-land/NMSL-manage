import Vue from "vue";
import Router from "vue-router";
import LogIn from "./views/login_reg/LogIn.vue";
import Manage from "./views/Manage.vue";
import Home from "./views/home/Home.vue";
import User from "./views/user/User.vue";
import Courses from "./views/courses/Courses.vue";
import CoursesDetail from "./views/courses/CourseDetail.vue";
import CourseVideos from "./views/courseVideos/CourseVideos.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
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
          name: "m_home",
          component: Home
        },
        {
          path: "user",
          name: "m_user",
          component: User
        },
        {
          path: "courses",
          name: "m_courses",
          component: Courses
        },
        {
          path: "courseDetail",
          name: "m_courseDetail",
          component: CoursesDetail
        },
        {
          path: "courseVideos",
          name: "m_courseVideos",
          component: CourseVideos
        }
      ]
    }
  ]
});
