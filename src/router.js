import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Me from './views/Me.vue'
import Message from './views/Message.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
