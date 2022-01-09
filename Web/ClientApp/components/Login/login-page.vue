<template>
  <div class="login-box">
    <v-img :src="logo" class="logo" />
    <h2>Login</h2>
    <form>
      <div>
        <v-text-field
          label="Username"
          dark
          v-model="login.login"
          required
          id="login"
        />
      </div>
      <div>
        <v-text-field
          label="Password"
          dark
          id="password"
          v-model="login.password"
          required
          type="password"
        />
      </div>
      <v-btn text @click="tryLogin" dark>Login</v-btn>
      <v-btn text @click="tryLoginDc" dark
        ><v-icon class="ma-3">mdi-discord</v-icon>Login</v-btn
      >
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import KccLogo from "@resources/Caption.png";
import LoginDto from "@models/user/LoginDto";
import userApi from "@backend/api/user-api";
import globalStore from "@backend/store/store";
import EventBus from "@models/EventBus";
import Events from "@models/shared/Events";
import store from "@backend/store/store";

@Component({
  name: "loginPage",
  components: {}
})
export default class loginPage extends Vue {
  loading: boolean = false;
  logo = KccLogo;
  isToken: boolean = false;
  login: LoginDto = new LoginDto();
  return_url: string = "";
  token: string = "";

  tryLoginDc() {
    window.location.href =
      "https://discord.com/api/oauth2/authorize?client_id=438328319403098123&redirect_uri=https%3A%2F%2Flocalhost%3A9001%2Flogin&response_type=code&scope=identify%20email";
  }

  async tryLogin() {
    this.loading = true;

    //až bude hotový návrh bude se dělat apina
    // var result = await userApi.login(this.login);

    // if (result.success && result.data) {
    //   if ((result.data as RedirectResponseDto).redirect) {
    //     window.location.href = (result.data as RedirectResponseDto).url;
    //   } else {
    //     window.location.href = this.return_url;
    //   }
    // }
    if (
      this.login.login &&
      this.login.password &&
      this.login.login.length > 0 &&
      this.login.password.length > 0
    ) {
      globalStore.saveToken("pepik");
      EventBus.$emit(Events.UserLoggedIn);
      this.$router.push({ path: `/` });
    }

    this.loading = false;
  }

  @Watch("isToken", { deep: false })
  async onSaveToken() {
    await userApi.getAccountInformation();

    this.$router.push({ path: `/` });
  }

  async mounted() {
    var result = await userApi.login(
      this.$route.query["code"].toString(),
      "https://localhost:9001/login"
    );
    store.saveToken(result.access_token);
    this.isToken = true;
    if (globalStore.getToken()) {
      this.$router.push({ path: `/` });
    }
  }
}
</script>

<style scoped>
.logo {
  margin: 0px 0px 30px 0px;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
</style>
