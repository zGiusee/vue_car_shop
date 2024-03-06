import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import Cars from "./pages/Cars.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/cars",
      name: "cars",
      component: Cars,
    },
  ],
});

export default router;
