<template>
  <v-container>
    <v-expansion-panels focusable dark>
      <v-expansion-panel v-for="(item, i) in twitchStreamers" :key="i">
        <v-expansion-panel-header>
          <v-row align="center" justify="center">
            <v-col cols="2"
              ><span
                v-bind:class="[
                  {
                    'dot-offline': !item.isOnline
                  },
                  { 'dot-online': item.isOnline }
                ]"
              ></span
            ></v-col>
            <v-col>
              <v-card elevation="0"
                ><v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle v-if="item.isOnline"
                  >Streamuje</v-card-subtitle
                >
                <v-card-subtitle v-if="!item.isOnline">Offline</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <vue-twitch-player
            class="ma-4 full-width"
            :channel="item.channel"
          ></vue-twitch-player>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import VueTwitchPlayer from "vue-twitch-player";
import twitchApi from "@backend/api/twitch-api";
@Component({
  name: "SideContent",
  components: { VueTwitchPlayer }
})
export default class SideContent extends Vue {
  loading: boolean = false;

  twitchStreamers = [
    {
      title: "dino dodo",
      channel: "dino_dodo_",
      icon: "",
      isOnline: true
    },
    {
      title: "Izinek",
      channel: "izinek",
      icon: "",
      isOnline: false
    },
    {
      title: "Kurunzo",
      channel: "kurunzo",
      icon: "",
      isOnline: false
    }
  ];

  async mounted() {
    // var result = twitchApi.GetCode();
    // console.log(result);
  }
}
</script>

<style scoped>
.dot-online {
  height: 10px;
  margin-left: 25px;
  width: 10px;
  background-color: rgb(121, 1, 1);
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0px 0px 8px 4px rgba(255, 0, 0, 0.308);
}

.dot-offline {
  height: 10px;
  width: 10px;
  margin-left: 25px;
  background-color: rgb(58, 58, 58);
  border-radius: 50%;
  display: inline-block;
}
</style>
