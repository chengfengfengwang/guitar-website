import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue';
import Home from './views/Home.vue'
import JitaPu from './views/JitaPu.vue'
import JitapuDetail from './views/JitapuDetail.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
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
          path: '/me',
          name: 'Me',
          component: Me
        }, 
        {
          path: '/message',
          name: 'Message',
          component: () => import(/* webpackChunkName: "about" */ './views/Message.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
