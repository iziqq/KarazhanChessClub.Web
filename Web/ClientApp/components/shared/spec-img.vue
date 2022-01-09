<template>
  <v-img class="spec-img" :src="selectedSpec" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import specDto from "@models/specDto";

// import spec imgs
import drb from "@resources/Specs/dr-b.png";
import drf from "@resources/Specs/dr-f.png";
import drr from "@resources/Specs/dr-r.png";

import roa from "@resources/Specs/ro-a.png";
import ros from "@resources/Specs/ro-s.png";
import roc from "@resources/Specs/ro-c.png";

import prs from "@resources/Specs/pr-s.png";
import prh from "@resources/Specs/pr-h.png";
import prd from "@resources/Specs/pr-d.png";

import mafr from "@resources/Specs/ma-fr.png";
import maf from "@resources/Specs/ma-f.png";
import maa from "@resources/Specs/ma-a.png";

import waa from "@resources/Specs/wa-a.png";
import wade from "@resources/Specs/wa-de.png";
import wad from "@resources/Specs/wa-d.png";

import wra from "@resources/Specs/wr-a.png";
import wrf from "@resources/Specs/wr-f.png";
import wrp from "@resources/Specs/wr-p.png";

import pah from "@resources/Specs/pa-h.png";
import pap from "@resources/Specs/pa-p.png";
import par from "@resources/Specs/pa-r.png";

import she from "@resources/Specs/sh-e.png";
import shen from "@resources/Specs/sh-en.png";
import shr from "@resources/Specs/sh-r.png";

import hus from "@resources/Specs/hu-s.png";
import hum from "@resources/Specs/hu-m.png";
import hub from "@resources/Specs/hu-b.png";

import dkb from "@resources/Specs/dk-b.png";
import dkf from "@resources/Specs/dk-f.png";
import dku from "@resources/Specs/dk-u.png";

@Component({
  name: "SpecImg",
  components: {}
})
export default class SpecImg extends Vue {
  loading: boolean = false;
  selectedSpec: any = null;

  @Prop({ default: 0 })
  showSpec: number;

  spec: specDto[] = [
    { id: 1, name: "Blood", class: 1, icon: dkb },
    { id: 2, name: "Frost", class: 1, icon: dkf },
    { id: 3, name: "Unoholy", class: 1, icon: dku },

    { id: 4, name: "Protection", class: 2, icon: wrp },
    { id: 5, name: "Fury", class: 2, icon: wrf },
    { id: 6, name: "Arms", class: 2, icon: wra },

    { id: 7, name: "Holy", class: 3, icon: pah },
    { id: 8, name: "Protection", class: 3, icon: pap },
    { id: 9, name: "Retri", class: 3, icon: par },

    { id: 10, name: "Ele", class: 4, icon: she },
    { id: 11, name: "Enha", class: 4, icon: shen },
    { id: 12, name: "Rest", class: 4, icon: shr },

    { id: 13, name: "Surv", class: 5, icon: hus },
    { id: 14, name: "MM", class: 5, icon: hum },
    { id: 15, name: "Beast master", class: 5, icon: hub },

    { id: 16, name: "Sub", class: 6, icon: ros },
    { id: 17, name: "Combat", class: 6, icon: roc },
    { id: 18, name: "Assa", class: 6, icon: roa },

    { id: 19, name: "Bala", class: 7, icon: drb },
    { id: 20, name: "Feral", class: 7, icon: drf },
    { id: 21, name: "Resto", class: 7, icon: drr },

    { id: 22, name: "Shadow", class: 8, icon: prs },
    { id: 23, name: "Holy", class: 8, icon: prh },
    { id: 24, name: "Disco", class: 8, icon: prd },

    { id: 25, name: "Frost", class: 9, icon: mafr },
    { id: 26, name: "Fire", class: 9, icon: maf },
    { id: 27, name: "Arcane", class: 9, icon: maa },

    { id: 28, name: "Affli", class: 10, icon: waa },
    { id: 29, name: "Destro", class: 10, icon: wade },
    { id: 30, name: "Demo", class: 10, icon: wad }
  ];
  mounted() {
    if (this.showSpec != 0) {
      this.selectedSpec = this.spec.filter(x => x.id == this.showSpec)[0].icon;
    }
  }
}
</script>

<style scoped>
.spec-img {
  height: 40px;
}
</style>
