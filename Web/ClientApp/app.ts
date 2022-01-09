import Vue from "vue";
import router from "./router";
import Application from "@components/app-root.vue";
import vuetify from "./plugins/vuetify";

// Plugins
import axios from "axios";
import VueRouter from "vue-router";

//import SvgIcon from "vue-svgicon";

//import "@mdi/font/css/materialdesignicons.min.css"; // Ensure you are using css-loader
//import TranslationApi from "@backend/api/translation";
import Events from "@models/shared/Events";
import store from "@backend/store/store";
import EventBus from "@models/EventBus";
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

Vue.use(VueRouter);

//AXIOS
Vue.prototype.$http = axios;
axios.defaults.baseURL = process.env.BASE_API_URL;

Vue.mixin({
  created: function() {
    EventBus.$on(Events.LocaleChanged, this.changeLocale);
  },
  data: function() {
    return {
      internalLocale: store.getLocale()
    };
  },
  methods: {
    translate: function(translationName) {
      try {
        return this.$locale({
          i: translationName,
          t: this.internalLocale
        });
      } catch (ex) {
        return translationName;
      }
    },
    changeLocale: function(internalLocale) {
      this.internalLocale = internalLocale;
    }
  }
});

async function getApp() {
  /*
  var result = await TranslationApi.getTranslationConfig();

  result.data.default = store.getLocale();
  */


  return new Vue({
    el: "#app-root",
    router: router,
    render: h => h(Application),
    vuetify,
  });
}

export { getApp, router };
