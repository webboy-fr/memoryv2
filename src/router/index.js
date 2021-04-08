import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store/index.js'

Vue.use(VueRouter)

/*
Définition des routes interne à la Single Page Application
*/

const routes = [{
    path: '/', //url de la route
    name: 'Home', //son petit nom (utile dans le framework)
    component: () =>
      import('@/views/Home.vue') //Route connecté directement à une vue
  },
  {
    path: '/play',
    name: 'Play',
    beforeEnter: (to, from, next) => { //Hook de routage permettant de remettre les données à zéro avant une nouvelle partie
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
      store.dispatch('getScores') //Recharge les scores avant affichage
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