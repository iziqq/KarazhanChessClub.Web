<template>
  <v-container v-if="!loading">
    <v-stepper v-model="page" vertical dark>
      <v-stepper-step :complete="page > 1" step="1" editable>
        General Information
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card>
          <v-card-text>
            <v-row>
              <v-text-field
                label="Your name"
                clearable
                v-model="guildApplication.name"
                class="ma-5"
            /></v-row>
            <v-row>
              <v-text-field
                label="Nick name"
                clearable
                v-model="guildApplication.nickname"
                class="ma-5"
            /></v-row>
            <v-row
              ><race-autocomplete class="ma-5" v-on:updateRace="updateRace" />
            </v-row>
            <v-row
              ><class-autocomplete
                class="ma-5"
                v-on:updateClass="updateClass"
              />
            </v-row>
            <v-row
              ><spec-autocomplete
                class="ma-5"
                :selectedClass="guildApplication.class"
                v-on:updateSpec="updateSpec"
              />
            </v-row>
          </v-card-text>
        </v-card>
        <v-btn class="ma-3 " @click="page = 2">
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="page > 2" step="2" editable>
        Do you have any alts ?
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card>
          <v-card-title>List of alts</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-row>
                  <v-text-field
                    label="Nick name"
                    clearable
                    v-model="newAlt.nickname"
                    class="ma-5"
                /></v-row>
                <v-row
                  ><race-autocomplete
                    class="ma-5"
                    v-on:updateRace="updateRaceAlt"
                    :altRace="guildApplication.race"
                  />
                </v-row>
                <v-row
                  ><class-autocomplete
                    class="ma-5"
                    v-on:updateClass="updateClassAlt"
                    :altClass="guildApplication.class"
                  />
                </v-row>
                <v-row
                  ><spec-autocomplete
                    class="ma-5"
                    :selectedClass="newAlt.class"
                    v-on:updateSpec="updateSpecAlt"
                    :altSpec="guildApplication.spec"
                  /> </v-row
              ></v-col>
              <v-col>
                <alts-list :alts="guildApplication.alts" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn class="ma-3" @click="addAlt">
              Add alt
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-btn class="ma-3 " @click="page = 3">
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="3" editable>
        Tell us something about yourself
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card>
          <v-card-text>
            <v-textarea
              label="Something about you"
              v-model="guildApplication.aboutMe"
            />
          </v-card-text>
        </v-card>
        <v-btn class="ma-3" @click="createApplication">
          Create guild application
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      v-if="error.length == 0"
      color="success"
      right
      top
    >
      Your guild application has been sent successfully. Good job!
    </v-snackbar>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      v-else
      right
      top
      color="error"
    >
      {{ error }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import guildAppDto from "@models/guildApplicationDto";
import RaceAutocomplete from "@components/shared/race-autocomplete.vue";
import ClassAutocomplete from "@components/shared/class-autocomplete.vue";
import SpecAutocomplete from "@components/shared/spec-autocomplete.vue";
import altDto from "@models/altDto";
import AltsList from "./alts-list.vue";

@Component({
  name: "GuildApplicationCreatePage",
  components: {
    RaceAutocomplete,
    ClassAutocomplete,
    SpecAutocomplete,
    AltsList
  }
})
export default class GuildApplicationCreatePage extends Vue {
  loading: boolean = false;
  page: number = 1;
  newAlt: altDto = { id: 0, nickname: "", race: 0, class: 0, spec: 0 };
  snackbar: boolean = false;
  error: string = "";

  guildApplication: guildAppDto = {
    id: 0,
    nickname: "",
    name: "",
    class: 0,
    race: 0,
    spec: 0,
    alts: [],
    aboutMe: "",
    status: 0,
    messages: []
  };
  createApplication() {
    this.snackbar = true;
  }

  updateRace(raceId: number) {
    this.guildApplication.race = raceId;
  }

  updateClass(classId: number) {
    this.guildApplication.class = classId;
  }

  updateSpec(specId: number) {
    this.guildApplication.spec = specId;
  }

  updateRaceAlt(raceId: number) {
    this.newAlt.race = raceId;
  }

  updateClassAlt(classId: number) {
    this.newAlt.class = classId;
  }

  updateSpecAlt(specId: number) {
    this.newAlt.spec = specId;
  }

  addAlt() {
    if (
      this.newAlt.nickname != "" &&
      this.newAlt.race != 0 &&
      this.newAlt.class != 0 &&
      this.newAlt.spec != 0
    ) {
      this.guildApplication.alts.push(this.newAlt);
      this.newAlt = { id: 0, nickname: "", race: 0, class: 0, spec: 0 };
    }
  }

  mounted() {
    this.loading;
  }
}
</script>

<style></style>
