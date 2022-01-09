<template>
  <v-card class="message-card" dark>
    <v-card-title>
      <v-row>
        <v-col>{{ message.sender.name }} - {{ message.subject }}</v-col>

        <v-spacer></v-spacer>
        <v-col
          ><v-card-subtitle>{{ message.sendDate }}</v-card-subtitle></v-col
        >
        <v-btn icon small><v-icon>mdi-reply</v-icon></v-btn>
        <v-btn icon small><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn icon small><v-icon>mdi-delete</v-icon></v-btn>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-card-subtitle>{{ message.text }}</v-card-subtitle>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import messageDto from "@models/messageDto";

@Component({
  name: "MessageCard",
  components: {}
})
export default class MessageCard extends Vue {
  loading: boolean = false;

  @Prop({ default: 0 })
  message: messageDto;

  mounted() {}
}
</script>

<style scoped>
.message-card {
  background: rgb(48, 48, 48);
}
</style>
