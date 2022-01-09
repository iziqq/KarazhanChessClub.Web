<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <main-content />
      </v-col>
      <v-col cols="5">
        <side-content />
      </v-col>
    </v-row>

    <!-- <progress-normal-card /> -->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import progressNormalCard from "./Progress/progress-normal-card.vue";
import MainContent from "./Content/main-content.vue";
import SideContent from "./Content/side-content.vue";

@Component({
  name: "homePage",
  components: { progressNormalCard, MainContent, SideContent }
})
export default class homePage extends Vue {
  loading: boolean = false;

  mounted() {}
}
</script>

<style scoped>
.progress-card {
  margin: 10px 0px 0px 0px;
  width: 35%;
  background: rgba(0, 0, 0, 0.5);
  font-family: Impact;
}

.card-subtitle {
  color: white !important;
  font-size: 20px;
}

h1 {
  font-family: Impact;
  color: white;
}
h2 {
  color: white;
}
</style>
