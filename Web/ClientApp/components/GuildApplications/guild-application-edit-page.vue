<template>
  <v-container v-if="!loading">
    <v-card dark class="application-card">
      <v-card-title>
        <v-row
          ><v-col>
            <v-text-field
              label="Your name"
              clearable
              v-model="guildApplication.name"
              class="ma-5"
          /></v-col>
          <v-col
            ><v-text-field
              label="Nick name"
              clearable
              v-model="guildApplication.nickname"
              class="ma-5"
          /></v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row
          ><v-col>
            <race-autocomplete
              class="ma-5"
              :disabled="true"
              :altRace="guildApplication.race"
          /></v-col>
          <v-col
            ><class-autocomplete
              class="ma-5"
              :disabled="true"
              :altClass="guildApplication.class"
          /></v-col>
          <v-col
            ><spec-autocomplete
              class="ma-5"
              :disabled="true"
              :selectedClass="guildApplication.class"
              :altSpec="guildApplication.spec"
          /></v-col>
        </v-row>
        <v-row>
          <v-card-subtitle>Alt list</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col
                ><alts-list
                  class="ma-5"
                  :alts="guildApplication.alts"
                  :elevation="0"
                  v-if="
                    guildApplication.alts && guildApplication.alts.length > 0
                  "
              /></v-col>

              <v-col>
                <v-textarea
                  class="ma-5"
                  label="Something about you"
                  v-model="guildApplication.aboutMe"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-row>
      </v-card-text>
    </v-card>
    <message-component :messages="guildApplication.messages" />
  </v-container>
</template>

<script lang="ts">
import guildAppDto from "@models/guildApplicationDto";
import { Component, Vue } from "vue-property-decorator";
import RaceAutocomplete from "@components/shared/race-autocomplete.vue";
import ClassAutocomplete from "@components/shared/class-autocomplete.vue";
import SpecAutocomplete from "@components/shared/spec-autocomplete.vue";
import AltsList from "./alts-list.vue";
import MessageComponent from "./message-component.vue";

@Component({
  name: "GuildApplicationEditPage",
  components: {
    RaceAutocomplete,
    ClassAutocomplete,
    SpecAutocomplete,
    AltsList,
    MessageComponent
  }
})
export default class GuildApplicationEditPage extends Vue {
  loading: boolean = false;
  guildApplications: guildAppDto[] = [];

  guildApplication: guildAppDto = new guildAppDto();
  mounted() {
    this.loading = true;
    //get application
    this.guildApplications = [
      {
        id: 1,
        nickname: "Mujrio",
        name: "Adam kurunzo",
        class: 1,
        spec: 1,
        race: 1,
        alts: [
          { id: 39, nickname: "Maonao", class: 9, race: 6, spec: 26 },
          { id: 49, nickname: "Maonaoc", class: 9, race: 6, spec: 26 }
        ],
        aboutMe: "Mam obří pipík",
        status: 2,
        messages: [
          {
            id: 39,
            subject: "To je ale kokot",
            sender: {
              name: "Poldaa",
              email: "",
              token: "",
              roles: [],
              id: -1
            },
            sendDate: new Date(),
            text: "kokot",
            parentId: 0
          },
          {
            id: 40,
            subject: "mas maleho pipika",
            sender: {
              name: "Kurunzo",
              email: "",
              token: "",
              roles: [],
              id: -1
            },
            sendDate: new Date(),
            text: "kokot ze ty mas obriho pipika ? nee",
            parentId: 0
          },
          {
            id: 41,
            subject: "Si totální hovno",
            sender: {
              name: "Izipipi",
              email: "",
              token: "",
              roles: [],
              id: -1
            },
            sendDate: new Date(),
            text: "kokot gear, kokot dmg, kokot iq",
            parentId: 0
          }
        ]
      },
      {
        id: 2,
        nickname: "peposlav",
        name: "",
        class: 2,
        spec: 5,
        race: 1,
        alts: [],
        aboutMe: "Mam obří pipík",
        status: 2,
        messages: []
      }
    ];
    if (this.$route.params.id) {
      this.guildApplication = this.guildApplications.filter(
        x => x.id == parseInt(this.$route.params.id)
      )[0];
    }
    this.$forceUpdate();
    this.loading = false;
  }
}
</script>

<style scoped>
.application-card {
  background: rgb(48, 48, 48);
}
</style>
