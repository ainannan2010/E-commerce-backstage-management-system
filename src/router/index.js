import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    children: [
      {
        path: '/users',
        name: 'user',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/user/index.vue'),
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/right/UserRole/UserRole.vue'),
      },
      {
        path: '/rights',
        name: 'right',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/right/UserRight/UserRight.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const access_token = getToken()
    if (!access_token) {
      router.push('/login')
      Message.warning('请先登录')
      return
    }
  }

  next()
})
export default router
