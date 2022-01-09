import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import cs from "vuetify/src/locale/cs";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { cs },
    current: "cs"
  }
});
