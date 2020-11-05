import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faPlus);

const routes = [
  { path: "/", component: Home },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
