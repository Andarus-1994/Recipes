import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { makeServer } from "./server";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faPlus, faEdit, faTrash, faListOl);
/* Starting the fake server */
makeServer();

const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
