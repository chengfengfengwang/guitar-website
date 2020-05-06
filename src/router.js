import Vue from 'vue'
import store from './store'
import Router from 'vue-router'
import Layout from './views/Layout.vue';
import Home from './views/Home.vue'
import JitaPu from './views/JitaPu.vue'
import JitapuDetail from './views/JitapuDetail.vue'
import Me from './views/Me.vue'
import Metronume from './views/Metronume.vue'
import UseGuide from './views/UseGuide.vue'
import LocalFulScreen from './views/LocalFulScreen.vue'
import Reward from './views/Reward.vue'
import Login from './views/Login.vue'

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/LocalFulScreen',
          name: 'LocalFulScreen',
          component: LocalFulScreen
        },
        {
          path: '/UseGuide',
          name: 'UseGuide',
          component: UseGuide
        },
        {
          path: '/jitapu',
          name: 'JitaPu',
          component: JitaPu
        },
        {
          path: '/jtpdetail',
          name: 'JitapuDetail',
          component: JitapuDetail
        }, 
        {
          path: '/Reward',
          name: 'Reward',
          component: Reward
        },
        {
          path: '/message',
          name: 'Message',
          component: () => import(/* webpackChunkName: "about" */ './views/Message.vue')
        },
        {
          path: '/message',
          name: 'Message',
          component: () => import(/* webpackChunkName: "about" */ './views/Message.vue')
        },
        {
          path: '/metronume',
          name: 'Metronume',
          component: Metronume
        }, 
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name == 'Login') {
    next()
  } else {
    // if (store.state.userInfo.user_id) {
    //   next()
    // } else {
    //   next({
    //     path: '/Login'
    //   })
    // }
    next()
  }
})
export default router
