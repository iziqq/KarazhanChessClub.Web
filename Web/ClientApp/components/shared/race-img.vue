<template>
  <v-img class="race-img" :src="selectedRace" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import raceDto from "@models/raceDto";

// import races imgs
import hm from "@resources/human-m.png";
import hf from "@resources/human-f.png";
import dm from "@resources/dwarf-m.png";
import df from "@resources/dwarf-f.png";
import gm from "@resources/gnome-m.png";
import gf from "@resources/gnome-f.png";
import em from "@resources/nelf-m.png";
import ef from "@resources/nelf-f.png";
import drm from "@resources/draenei-m.png";
import drf from "@resources/draenei-f.png";

@Component({
  name: "RaceImg",
  components: {}
})
export default class RaceImg extends Vue {
  loading: boolean = false;
  selectedRace: any = null;

  @Prop({ default: 0 })
  showRace: number;

  races: raceDto[] = [
    {
      id: 1,
      name: "Human Male",
      sex: 1,
      icon: hm
    },
    {
      id: 2,
      name: "Dwarf Male",
      sex: 1,
      icon: dm
    },
    {
      id: 3,
      name: "Night Elf Male",
      sex: 1,
      icon: em
    },
    {
      id: 4,
      name: "Gnome Male",
      sex: 1,
      icon: gm
    },
    {
      id: 5,
      name: "Draenei Male",
      sex: 1,
      icon: drm
    },
    {
      id: 6,
      name: "Human Female",
      sex: 2,
      icon: hf
    },
    {
      id: 7,
      name: "Dwarf Female",
      sex: 2,
      icon: df
    },
    {
      id: 8,
      name: "Night Elf Female",
      sex: 2,
      icon: ef
    },
    {
      id: 9,
      name: "Gnome Female",
      sex: 2,
      icon: gf
    },
    {
      id: 10,
      name: "Draenei Female",
      sex: 2,
      icon: drf
    }
  ];

  mounted() {
    if (this.showRace != 0) {
      this.selectedRace = this.races.filter(x => x.id == this.showRace)[0].icon;
    }
  }
}
</script>

<style scoped>
.race-img {
  height: 40px;
}
</style>
