import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import App from '@/App.vue'


Vue.use(Vuex)


Vue.config.productionTip = false


import {
  store  
} from '@/store'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
