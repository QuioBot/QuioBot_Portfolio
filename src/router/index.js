import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../views/PageNotFound.vue";

const routes = [

  {
    path: "/",
    name: "HomeDark",
    component: () => import("../views/HomeDark.vue"),
    meta: {
      title: "Omar El Ghiba || Porfolio",
    },
  },
  {
    path: "/test",
    component: NotFound,
    meta: {
      title: "Not Found",
    },
  },
  // {
  //   path: "/home-light",
  //   name: "HomeLight",
  //   component: () => import("../views/HomeLight.vue"),
  //   meta: {
  //     title: "Home Light || Quiobot VueJS 3 Personal Portfolio Template",
  //   },
  // },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      title: "Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo(0, 0);
});

export default router;
