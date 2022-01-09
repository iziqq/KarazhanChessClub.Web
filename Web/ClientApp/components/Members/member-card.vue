<template>
  <v-expansion-panels dark>
    <v-expansion-panel v-if="member">
      <v-expansion-panel-header color="rgb(45,45,45)">
        <v-row align="start" justify="start">
          <v-col class="panel-nickname"
            ><strong>{{ member.nickname }}</strong></v-col
          >
          <v-col cols="2" md="2"><race-img :showRace="member.race"/></v-col>
          <v-col cols="2" md="2"><class-img :showClass="member.class"/></v-col>
          <v-col cols="2" md="2"><spec-img :showSpec="member.spec"/></v-col>
          <v-spacer />
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="rgb(18,18,18)">
        <v-container v-if="member.description != null">
          <v-row align="center" justify="center" class="ma-4"
            ><strong> About me</strong>
          </v-row>
          <v-row>
            <v-textarea v-model="member.description" disabled="true" />
          </v-row>
        </v-container>
        <v-container v-if="member.socials != null">
          <v-row align="center" justify="center" class="ma-4"
            ><strong> Socials</strong>
          </v-row>
          <v-row v-for="social in member.socials" :key="social.id">
            <v-col>
              <v-text-field
                v-model="social.text"
                disabled="true"
                :prepend-icon="social.icon"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-if="member.alts != null">
          <v-row align="center" justify="center" class="ma-4"
            ><strong> Alt list</strong>
          </v-row>
          <v-row
            align="start"
            justify="start"
            v-for="alt in member.alts"
            :key="alt.id"
          >
            <v-col class="panel-nickname" cols="2"
              ><strong>{{ alt.nickname }}</strong></v-col
            >
            <v-col cols="2" md="2"><race-img :showRace="alt.race"/></v-col>
            <v-col cols="2" md="2"><class-img :showClass="alt.class"/></v-col>
            <v-col cols="2" md="2"
              ><spec-img :showSpec="alt.spec"
            /></v-col> </v-row
        ></v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import memberDto from "@models/memberDto";
import raceImg from "@components/shared/race-img.vue";
import classImg from "@components/shared/class-img.vue";
import specImg from "@components/shared/spec-img.vue";

@Component({
  name: "MemberCard",
  components: { raceImg, classImg, specImg }
})
export default class MemberCard extends Vue {
  loading: boolean = false;

  @Prop({ default: 0 })
  member: memberDto;

  mounted() {}
}
</script>

<style scoped></style>
