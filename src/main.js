import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";


Vue.config.productionTip = false;
Vue.use(VueRouter);

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
