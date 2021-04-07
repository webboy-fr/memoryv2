import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store/index.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
      import('@/views/Home.vue')
  },
  {
    path: '/play',
    name: 'Play',
    beforeEnter: (to, from, next) => {
      store.commit('setGame', [])
      store.commit('cleanTimerInterval')
      store.commit('setTimer', 0)
      next()
    },
    component: () => import('@/views/Play.vue')
    
  },
  {
    path: '/scores',
    name: 'Scores',
    beforeEnter: (to, from, next) => {
      store.dispatch('getScores')      
      next()
    },
    component: () =>
      import('@/views/Scores.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  //base: 'localhost:8080',
  routes
})

export default router