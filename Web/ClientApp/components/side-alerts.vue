<template>
  <div class="side-alert-container">
    <v-snackbar
      v-model="isVisible"
      :color="model.color"
      right
      absolute
      :timeout="model.timeout"
      style="z-index: 1000 !important;"
    >
      {{ model.text }}
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EventBus from "@models/EventBus";
import Events from "@models/shared/Events";
import SideAlertModel from "@models/shared/SideAlert";

@Component({
  name: "SideAlerts"
})
export default class SideAlerts extends Vue {
  isVisible: boolean = false;

  model: SideAlertModel = new SideAlertModel("", "primary", 3000);

  mounted() {
    EventBus.$on(Events.ShowSideAlert, this.onShowSideAlert);
  }

  onShowSideAlert(sideAlert: SideAlertModel) {
    this.model = sideAlert;
    this.isVisible = true;
  }
}
</script>

<style scoped>
.side-alert-container {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
}
</style>
