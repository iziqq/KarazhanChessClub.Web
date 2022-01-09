<template>
  <v-footer class="izi-footer" padless dark>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.id"
        color="white"
        text
        rounded
        class="my-2"
        @click="redirectTo(link.link)"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — Karazhan Chess Club
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "FooterPage",
  components: {}
})
export default class FooterPage extends Vue {
  links = [
    {
      id: 1,
      link: "https://discord.gg/n53zv7SB",
      icon: "mdi-discord"
    },
    { id: 2, link: "https://www.facebook.com", icon: "mdi-facebook" },
    { id: 3, link: "https://twitch.tv", icon: "mdi-twitch" }
  ];

  redirectTo(uri: string) {
    window.location.href = uri;
  }
}
</script>

<style scoped></style>
