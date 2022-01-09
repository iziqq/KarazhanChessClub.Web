<template>
  <v-container>
    <v-row>
      <v-col cols="6" v-for="member in members" :key="member.id">
        <member-card :member="member" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import memberDto from "@models/memberDto";
import { Component, Vue, Watch } from "vue-property-decorator";
import MemberCard from "./member-card.vue";

@Component({
  name: "MembersPage",
  components: { MemberCard }
})
export default class MembersPage extends Vue {
  loading: boolean = false;

  members: memberDto[] = [
    {
      id: 1,
      nickname: "Izipipi",
      race: 8,
      class: 7,
      spec: 20,
      alts: [
        { id: 1, nickname: "Iziriel", race: 6, class: 1, spec: 2 },
        { id: 2, nickname: "Izin", race: 2, class: 4, spec: 12 }
      ],
      description: "jsem off tank",
      socials: [
        { id: 1, icon: "mdi-discord", text: "Izi#5162" },
        { id: 2, icon: "mdi-twitch", text: "www.twitch.tv/izinek" }
      ]
    },
    {
      id: 2,
      nickname: "Poldaa",
      race: 1,
      class: 3,
      spec: 9,
      alts: null,
      description: "jsem bomby pecky",
      socials: null
    },
    {
      id: 3,
      nickname: "Kurunzo",
      race: 6,
      class: 1,
      spec: 1,
      alts: null,
      description: "jsem tank",
      socials: null
    },
    {
      id: 4,
      nickname: "Meowinghax",
      race: 6,
      class: 8,
      spec: 23,
      alts: null,
      description: "jsem tank",
      socials: null
    },
    {
      id: 5,
      nickname: "Hii",
      race: 8,
      class: 5,
      spec: 13,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 6,
      nickname: "Cyry",
      race: 10,
      class: 4,
      spec: 10,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 7,
      nickname: "Pipizinka",
      race: 6,
      class: 10,
      spec: 29,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 8,
      nickname: "Oldtemplar",
      race: 8,
      class: 7,
      spec: 21,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 9,
      nickname: "Gustik",
      race: 5,
      class: 2,
      spec: 6,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 10,
      nickname: "Ravager",
      race: 8,
      class: 1,
      spec: 3,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 11,
      nickname: "Rumginvodka",
      race: 6,
      class: 6,
      spec: 17,
      alts: [],
      description: "jsem tank",
      socials: null
    },
    {
      id: 12,
      nickname: "Kyaru",
      race: 8,
      class: 7,
      spec: 21,
      alts: [],
      description: "jsem tank",
      socials: null
    }
  ];

  mounted() {}
}
</script>

<style></style>
