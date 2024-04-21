import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Watch",
      component: () => import("../views/WatchList.vue"),
    },
  ],
});
export default router;
