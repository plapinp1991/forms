import Vue from 'vue'
import Router from 'vue-router'
import Questions from './views/Questions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import(/* webpackChunkName: "lists" */ './views/BlackList.vue')
    },
    {
      path: '/call',
      name: 'call',
      component: () => import(/* webpackChunkName: "call" */ './views/CallCenter.vue')
    }
  ]
})
