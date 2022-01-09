<template>
  <v-autocomplete
    v-model="selectedClass"
    :disabled="disabled"
    :items="classes"
    chips
    label="Choose your class"
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
import classDto from "@models/classDto";

// import classes imgs
import dk from "@resources/dk.png";
import wr from "@resources/wr.png";
import pa from "@resources/pa.png";
import hu from "@resources/hu.png";
import sh from "@resources/sh.png";
import ro from "@resources/ro.png";
import dr from "@resources/dr.png";
import pr from "@resources/pr.png";
import ma from "@resources/ma.png";
import wa from "@resources/wa.png";

@Component({
  name: "ClassAutocomplete",
  components: {}
})
export default class ClassAutocomplete extends Vue {
  isUpdating: boolean = false;
  selectedClass: number = 0;

  @Prop({ default: false })
  disabled: boolean;

  @Prop({ default: 0 })
  altClass: number;

  @Watch("altClass", { deep: true })
  updateSelectedClass() {
    this.selectedClass = this.altClass;
  }

  @Watch("selectedClass", { deep: true })
  updateClass() {
    this.$emit("updateClass", this.selectedClass);
  }

  remove() {
    this.selectedClass = 0;
  }

  classes: classDto[] = [
    {
      id: 1,
      name: "DK",
      icon: dk
    },
    {
      id: 2,
      name: "Warrior",
      icon: wr
    },
    {
      id: 3,
      name: "Paladin",
      icon: pa
    },
    {
      id: 4,
      name: "Shaman",
      icon: sh
    },
    {
      id: 5,
      name: "Hunter",
      icon: hu
    },
    {
      id: 6,
      name: "Rogue",
      icon: ro
    },
    {
      id: 7,
      name: "Druid",
      icon: dr
    },
    {
      id: 8,
      name: "Priest",
      icon: pr
    },
    {
      id: 9,
      name: "Mage",
      icon: ma
    },
    {
      id: 10,
      name: "Warlock",
      icon: wa
    }
  ];
  mounted() {
    if (this.altClass != 0) {
      this.selectedClass = this.altClass;
    }
  }
}
</script>

<style></style>
