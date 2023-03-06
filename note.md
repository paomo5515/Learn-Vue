### 后台管理系统权限问题

基于菜单的动态路由管理：根据不同的用户（菜单），动态的注册应该有的路由，而不是一次性将所有的路由注册到 router 中；
userMenus => 动态展示菜单 => 将菜单映射成路由对象

1. 用户登录之后，拿到用户的 id；
2. 根据 id 并携带 token 去请求用户的详细信息（里面有 菜单信息）
3. 在跳转页面之前，
4. 进行本地 缓存 菜单信息
5. 动态获取所有的路由对象，放到数组中
6. 从文件中将所有路由对象先读取到数组中
7. 根据菜单去匹配正确的路由；过滤用户有的路由，然后 forEach router.addRouter("main",xx)；
8. v-for 去遍历 菜单信息，展示菜单，
9. 根据菜单动态的添加路由对象，获取到所有的路由对象，根据菜单去匹配正确的路由对象 router.addRouter("main",xx)；
   添加菜单的点击事件，将路由 的 path push 到 router 表里面去；动态的添加路由 router.addRoute("main",xxx)
10. 就跳转到了 刚才添加的 路由页面去了

```js
export default {
  path: '/main/analysis/dashboard',
  component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
}
```
