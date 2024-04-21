import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Watch",
      component: () => import("../views/WatchList.vue"),
    },
    {
      path: "/chart/:id",
      name: "Chart",
      component: () => import("../views/KlinesChart.vue"),
    },
  ],
});
export default router;
