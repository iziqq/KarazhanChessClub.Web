<template>
  <v-container>
    <v-card dark class="main-content">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet>
            <v-img
              :src="logo"
              class="ma-2 carousel-img"
              height="85%"
              width="97%"
            />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>

    <v-card
      dark
      class="main-content mt-5"
      v-for="item in status"
      :key="item.id"
    >
      <v-card-title>
        {{ item.title }}
        <v-row>
          <v-spacer></v-spacer>
          <v-card-subtitle>
            {{ item.sender.nickname }} - {{ item.sendDate.toLocaleString() }}
          </v-card-subtitle>
        </v-row>
      </v-card-title>

      <v-card-subtitle> {{ item.subtitle }} </v-card-subtitle>

      <v-card-text> {{ item.text }} </v-card-text>

      <v-card-actions>
        <v-spacer />
        {{ item.likes }}
        <v-btn icon @click="likeStatus(item)" class="ml-1">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn icon @click="replyStatus(item)">
          <v-icon>mdi-reply</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expansion-panels focusable dark v-if="item.replies != null">
        <v-expansion-panel>
          <v-expansion-panel-header>
            Replies ({{ item.replies.length }})
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card v-for="reply in item.replies" :key="reply.id" elevation="0">
              <v-card-subtitle>
                <v-row>
                  <v-spacer></v-spacer>
                  {{ reply.sender.nickname }} -
                  {{ reply.sendDate.toLocaleString() }}
                </v-row>
              </v-card-subtitle>
              {{ reply.text }}
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import kccLogo from "@resources/kccLogo.png";
import statusDto from "@models/statusDto";
import UserDto from "@models/user/UserDto";
@Component({
  name: "MainContent",
  components: {}
})
export default class MainContent extends Vue {
  loading: boolean = false;
  logo = kccLogo;
  colors: string[] = ["indigo"];
  slides: string[] = ["logo"];

  status: statusDto[] = [
    {
      id: 1,
      title: "Test nového contentu",
      subtitle: "zkusím jeden",
      text:
        "Chtěl bych Vám oznámit nový raid time. Od 7.1 se bude chodit od 17:20 - 23:50. Děkuji.",
      sender: new UserDto(),
      sendDate: new Date(),
      likes: 17,
      replies: [
        {
          id: 1,
          subject: null,
          sender: new UserDto(),
          sendDate: new Date(),
          text: "bože.. ",
          parentId: 1
        }
      ]
    },
    {
      id: 1,
      title: "Pepik má pipík",
      subtitle: "obří jeden",
      text: "Peeeepo pooooopu",
      sender: new UserDto(),
      sendDate: new Date(),
      likes: 87,
      replies: null
    }
  ];

  mounted() {}
}
</script>

<style scoped>
.main-content:hover {
  box-shadow: 0px 0px 5px 2.5px rgb(58, 57, 0);
  transition: 0.2s;
}
.carousel-img {
  max-height: 400px;
  border-radius: 5px;
}
</style>
