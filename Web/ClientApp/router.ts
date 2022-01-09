import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import store from "@backend/store/store";
import EventBus from "@models/EventBus";
import Events from "@models/shared/Events";
import userApi from "@backend/api/user-api";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes,
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo: any = 0;

    if (to.hash) {
      scrollTo = to.hash;
    }

    return goTo(scrollTo, { offset: 64 });
  }
});

router.beforeEach(async (to, from, next) => {
  //page title
  document.title = to.meta.title;
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getCurrentUser()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
    //var currentUserResponse = await userApi.getCurrentUser();

    //store.saveCurrentUser(currentUserResponse.data);  
});

export default router;
