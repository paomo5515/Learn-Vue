import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';




// 配置映射关系
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    // 判断是否存在 /:pathMatch(.*)* 多一个 * 就会通过 / 分割成一个数组
    path: "/:pathMatch(.*)",
    component: () => import("../pages/NotFound.vue")
  },
  {
    path: "/home",
    name: "home",
    meta: {
      name: "hello",
      age: 18
    },
    component: () => import(/* webpackChunkName: "home-chunk" */"../pages/Home.vue"),
    children: [
      {
        path: "",
        redirect: "/home/message"
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "product",
        component: () => import("../pages/HomeShops.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about-chunk" */"../pages/About.vue")
  },
  {
    path: "/user/:username/id/:id",
    component: () => import("../pages/User.vue")
  }
];


// 创建一个路由对象 router
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;

