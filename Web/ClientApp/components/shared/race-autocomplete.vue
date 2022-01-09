<template>
  <v-autocomplete
    v-model="selectedRace"
    :disabled="disabled"
    :items="races"
    chips
    label="Choose your race"
    item-text="name"
    item-value="id"
    dark
    single-line
  >
    <template v-slot:selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        @click="data.select"
      >
        <v-avatar left>
          <v-img :src="data.item.icon"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>
    <template v-slot:item="data">
      <template>
        <v-list-item-avatar>
          <img :src="data.item.icon" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
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
  name: "RaceAutocomplete",
  components: {}
})
export default class RaceAutocomplete extends Vue {
  isUpdating: boolean = false;

  selectedRace: number = 0;

  remove() {
    this.selectedRace = 0;
  }
  @Prop({ default: false })
  disabled: boolean;

  @Prop({ default: 0 })
  altRace: number;

  @Watch("altRace", { deep: true })
  updateSelectedRace() {
    if (this.altRace != 0) {
      this.selectedRace = this.altRace;
    }
  }

  @Watch("selectedRace", { deep: true })
  updateRace() {
    this.$emit("updateRace", this.selectedRace);
  }

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
    if (this.altRace != 0) {
      this.selectedRace = this.altRace;
    }
  }
}
</script>

<style></style>
