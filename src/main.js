import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {}
  },
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(opts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App)
}).$mount("#app");
