import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  VueMeta,
  render: (h) => h(App),
}).$mount("#app");
