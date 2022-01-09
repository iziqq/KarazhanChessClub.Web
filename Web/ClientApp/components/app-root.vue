<template>
  <v-app id="app-root">
    <izi-nav-menu
      :mini="navMenuMini || $vuetify.breakpoint.mobile"
    ></izi-nav-menu>
    <v-main class="back-ground-color">
      <router-view></router-view>
    </v-main>
    <izi-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Watch } from "vue-property-decorator";
import iziNavMenu from "@components/nav-menu.vue";
import iziFooter from "@components/karazhan-footer.vue";
@Component({
  components: {
    iziNavMenu,
    iziFooter
  }
})
export default class AppRoot extends Vue {
  navMenuMini = false;

  hideLayout = false;

  mounted() {}
}
</script>

<style>
.back-ground-color {
  background-color: rgb(26, 26, 26);
}
</style>
