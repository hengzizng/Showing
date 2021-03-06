import Vue from "vue";
import Router from "vue-router";

import AppFooter from "./layout/AppFooter";
import Header from "./layout/Header";

import MainPage from "./views/MainPage.vue";
import ShowDetail from "./views/ShowDetail.vue";
import Callback from "./views/Callback.vue";
import MyPage from "./views/MyPage.vue";
import SearchPage from "./views/SearchPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "MainPage",
      components: {
        header: Header,
        default: MainPage,
        footer: AppFooter,
      },
    },
    {
      path: "/show/:showId",
      name: "ShowDetail",
      components: {
        header: Header,
        default: ShowDetail,
        footer: AppFooter,
      },
    },
    {
      path: "/callback",
      name: "Callback",
      component: Callback,
    },
    {
      path: "/users/:userId",
      name: "MyPage",
      components: {
        header: Header,
        default: MyPage,
        footer: AppFooter,
      },
    },
    {
      path: "/search/:keyword",
      name: "SearchPage",
      components: {
        header: Header,
        default: SearchPage,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
