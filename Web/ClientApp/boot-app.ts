//import "core-js/es6/promise";
//import "core-js/es6/array";

import {
  getApp
} from "./app";

getApp().then((app) => {
  app.$mount("#app-root");
});