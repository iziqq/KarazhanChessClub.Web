import ConfirmDialogOptions from "@models/shared/ConfirmDialogOptions";
import Vue from "vue";
import VueRouter, { NavigationGuard, Route } from "vue-router";
import { Framework, Vuetify } from "vuetify";

declare module "vue/types/vue" {
  export interface Vue {
    translate(translationName: string): string;
    $router: VueRouter;
    $route: Route;
    $vuetify: Framework;
    $confirm(
      title: string,
      message: string,
      options?: ConfirmDialogOptions
    ): Promise<boolean>;
  }
}

declare module "vue/types/options" {
  export interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    beforeRouteEnter?: NavigationGuard<V>;
    beforeRouteLeave?: NavigationGuard<V>;
    beforeRouteUpdate?: NavigationGuard<V>;
  }

  export interface ComponentOptions<
    V extends Vue,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    Props = DefaultProps
  > {
    vuetify?: Vuetify;
  }
}
