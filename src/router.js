import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import Cars from "./pages/Cars.vue";
import DetailCar from "./pages/DetailCar.vue";
import CarBrand from "./pages/CarBrand.vue";

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
    {
      path: "/cars/:id",
      name: "detail_car",
      component: DetailCar,
    },
    {
      path: "/cars/brand/:id",
      name: "car_brand",
      component: CarBrand,
    },
  ],
});

export default router;
