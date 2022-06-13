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
    path: "/login",
    component: () => import("../pages/Login.vue")
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
  },

];


// 创建一个路由对象 router
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: () => import("../pages/Category.vue")
}

// 添加顶级路由对象
router.addRoute(categoryRoute)

// 添加二级路由对象
router.addRoute("home", {
  path: "/home/moment",
  component: () => import("../pages/HomeMoment.vue")
})

// 导航守卫
// to: route 对象，即将跳转到的 route对象
// from: route 对象，从哪一个路由对象过来的
/**
 *  返回值问题：
 *    1.false：不进行导航
 *    2.undefined：或者不写返回值：进行默认导航
 *    3.字符串：路径，跳转到对应的路径中
 *    4.对象：类似于 router.push({ path: "/login", ...})
 */
router.beforeEach((to, from) => {
  /*  
   if (to.path.includes("/home")) {
     return "/login"
   }
   console.log("进行路路由跳转");
  */
  console.log(to);
  // 只要用户没登陆就不能访问其它页面
  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token")
    if (!token) {
      return "/login"
    }
  }
})

export default router;

