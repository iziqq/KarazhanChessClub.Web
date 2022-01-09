<template>
  <v-img class="class-img" :src="selectedClass" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
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
  name: "ClassImg",
  components: {}
})
export default class ClassImg extends Vue {
  loading: boolean = false;
  selectedClass: any = null;

  @Prop({ default: 0 })
  showClass: number;

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
    if (this.showClass != 0) {
      this.selectedClass = this.classes.filter(
        x => x.id == this.showClass
      )[0].icon;
    }
  }
}
</script>

<style scoped>
.class-img {
  height: 40px;
}
</style>
