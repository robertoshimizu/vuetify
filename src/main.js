import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueMeta from 'vue-meta';
import VCurrencyField from 'v-currency-field'
import Client from './model/client'

Vue.config.productionTip = false;
Vue.use(VCurrencyField, {
  locale: 'pt-BR',
  decimalLength: 2,
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: 0,
  valueAsInteger: false,
  allowNegative: true
})

new Vue({
  vuetify,
  router,
  VueMeta,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$Client = new Client('John', "Doe");
