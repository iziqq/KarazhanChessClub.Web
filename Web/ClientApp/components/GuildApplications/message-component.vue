<template>
  <v-container v-if="!loading">
    <v-row class="mt-1 mb-3">
      <v-spacer> </v-spacer>
      <v-btn @click="createMessage" text dark>Add comment</v-btn>
    </v-row>
    <v-row v-if="isNewMessage" class="mr-5 ml-5">
      <v-col>
        <v-card class="new-message" dark>
          <v-card-title>
            <v-text-field
              label="subject"
              v-model="newMessage.subject"
              class="ma-5"
            />
          </v-card-title>
          <v-card-text>
            <v-textarea class="ma-5" label="Text" v-model="newMessage.text" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="AddMessage()">Post</v-btn>
            <v-btn text @click="CancelMessage()">Cancel</v-btn>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
    <v-row
      v-for="message in messagesForCard"
      :key="message.id"
      class="mr-5 ml-5"
    >
      <v-col><message-card :message="message"/></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import MessageCard from "./message-card.vue";
import messageDto from "@models/messageDto";
import UserDto from "@models/user/UserDto";

@Component({
  name: "MessageComponent",
  components: { MessageCard }
})
export default class MessageComponent extends Vue {
  loading: boolean = false;
  messagesForCard: messageDto[] = [];
  newMessage: messageDto = new messageDto();
  isNewMessage: boolean = false;

  @Prop({ default: null })
  messages: messageDto[];

  // @Watch("messages", { deep: true })
  // updateSelectedClass() {
  //   this.loading = true;
  //   this.messagesForCard = this.messages;
  //   this.loading = false;
  // }

  createMessage() {
    this.isNewMessage = true;
    this.newMessage = new messageDto();
  }

  AddMessage() {
    var date = new Date();
    this.newMessage.sendDate = date;
    this.newMessage.sender = new UserDto();
    this.messagesForCard.push(this.newMessage);
    this.isNewMessage = false;
    //show snack bar
  }
  CancelMessage() {
    this.isNewMessage = false;
    this.newMessage = new messageDto();
  }

  mounted() {
    this.loading = true;
    this.messagesForCard = this.messages;
    this.loading = false;
  }
}
</script>

<style scoped>
.new-message {
  background: rgb(52, 52, 52);
}
</style>
