import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import {router} from './routers.js';
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})
