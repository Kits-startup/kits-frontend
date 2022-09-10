import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { router } from "./routers.js";
import vuetify from "./plugins/vuetify";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  store,
  router,
  vuetify,
  render: (h) => h(App),
});
