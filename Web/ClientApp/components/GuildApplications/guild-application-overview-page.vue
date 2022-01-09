<template>
  <v-container v-if="!loading">
    <h1>ALL GUILD APPLICATIONS</h1>
    <v-card
      v-for="application in guildApplications"
      :key="application.id"
      dark
      @click="openApplication(application)"
      class="ma-5 guild-application-card"
    >
      <v-card-title>
        <v-row class="ml-5">
          <v-col cols="3">{{ application.nickname }}</v-col>
          <v-col cols="2" class="pl-1"
            ><race-img :showRace="application.race" />
          </v-col>
          <v-col cols="2" class="pl-1"
            ><class-img :showClass="application.class" />
          </v-col>
          <v-col cols="2" class="pl-1"
            ><spec-img :showSpec="application.spec" />
          </v-col>
        </v-row>
        <v-spacer />
        <v-btn icon small @click.stop.prevent="1 == 2"
          ><v-icon>mdi-pencil</v-icon></v-btn
        >
        <v-btn icon small @click.stop.prevent="1 == 2"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import guildAppDto from "@models/guildApplicationDto";
import raceImg from "@components/shared/race-img.vue";
import classImg from "@components/shared/class-img.vue";
import specImg from "@components/shared/spec-img.vue";

@Component({
  name: "GuildApplicationOverviewPage",
  components: { raceImg, classImg, specImg }
})
export default class GuildApplicationOverviewPage extends Vue {
  loading: boolean = false;
  guildApplications: guildAppDto[] = [];

  openApplication(application: guildAppDto) {
    this.$router.push({ path: `/guildApplications/${application.id}` });
  }

  mounted() {
    this.loading = true;
    this.guildApplications = [
      {
        id: 1,
        nickname: "Mujrio",
        name: "",
        class: 1,
        spec: 1,
        race: 1,
        alts: [{ id: 0, nickname: "", class: 0, race: 0, spec: 0 }],
        aboutMe: "Mam obří pipík",
        status: 2,
        messages: []
      },
      {
        id: 2,
        nickname: "peposlav",
        name: "",
        class: 2,
        spec: 5,
        race: 1,
        alts: [{ id: 0, nickname: "", class: 0, race: 0, spec: 0 }],
        aboutMe: "Mam obří pipík",
        status: 2,
        messages: []
      }
    ];
    this.loading = false;
  }
}
</script>

<style scoped>
h1 {
  font-family: Impact;
  color: white;
}

.guild-application-card {
  background: rgb(48, 48, 48);
}
</style>
