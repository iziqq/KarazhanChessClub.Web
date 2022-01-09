<template>
  <div v-if="alts.length > 0">
    <v-card
      v-for="item in alts"
      :key="item.id"
      class="alt-card"
      :elevation="elevation"
    >
      <v-card-title>
        <v-row class="ml-5">
          <v-col cols="4">{{ item.nickname }}</v-col>
          <v-col cols="2" md="2"><race-img :showRace="item.race"/></v-col>
          <v-col cols="2" md="2"><class-img :showClass="item.class"/></v-col>
          <v-col cols="2" md="2"><spec-img :showSpec="item.spec"/></v-col>
          <v-col cols="3" md="3" />
        </v-row>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import altDto from "@models/altDto";
import RaceImg from "@components/shared/race-img.vue";
import ClassImg from "@components/shared/class-img.vue";
import SpecImg from "@components/shared/spec-img.vue";
@Component({
  name: "AltsList",
  components: {
    RaceImg,
    ClassImg,
    SpecImg
  }
})
export default class AltsList extends Vue {
  loading: boolean = false;

  @Prop({ default: [] })
  alts: altDto[];

  @Prop({ default: 2 })
  elevation: number;

  @Watch("alts", { deep: true })
  checkAlts() {}

  mounted() {
    this.loading;
  }
}
</script>

<style scoped>
.alt-card {
  background: rgb(48, 48, 48);
  border-radius: 0;
}
</style>
