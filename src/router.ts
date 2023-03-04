import { createRouter, createWebHistory } from "vue-router";

import Index from "./components/index/index.vue";
import Home from "./components/home/index.vue";
import About from "./components/about/index.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/home", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
