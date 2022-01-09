<template>
  <div class="home-page"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import userApi from "@backend/api/user-api";
import store from "@backend/store/store";

@Component({
  name: "redirectPage",
  components: {}
})
export default class redirectPage extends Vue {
  loading: boolean = false;
  isToken: boolean = false;

  @Watch("isToken", { deep: false })
  async onSaveToken() {
    await userApi.getAccountInformation();

    //this.$router.push({ path: `/` });
  }

  async mounted() {
    var result = await userApi.login(
      this.$route.query["code"].toString(),
      "https://localhost:9001/redirect"
    );
    store.saveToken(result.access_token);
    this.isToken = true;
  }
}
</script>

<style></style>
