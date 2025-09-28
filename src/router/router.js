import {createRouter, createWebHistory} from "vue-router";

import Main from "../views/Main.vue";
import Store from "../views/Store.vue";

const routes = [
  {path: "/", component: Main},
  {path: "/Store", component: Store},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;