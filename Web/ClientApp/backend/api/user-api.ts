import store from "@backend/store/store";
import axios from "axios";
import api from "./api";
import Result from '@models/Result';
import UserDto from "@models/user/UserDto";


export default {
  
  async login(code:string,redirect_uri: string) {
    const params = new URLSearchParams();

    params.append('client_id', '438328319403098123')
    params.append('client_secret', 'ZWoy73FSQ3py6Wg9zeE-5eBCBL80q0gu')
    params.append('grant_type', 'authorization_code')
    params.append('code', code,)
    params.append('redirect_uri', redirect_uri)

    return await api.post(`https://discord.com/api/oauth2/token`, params);
  },

  async getAccountInformation() {
    var token = store.getToken();
    var user = new UserDto();
    const AuthStr = 'Bearer ' + token; 
    axios.get(`https://discord.com/api/users/@me`, { headers: { Authorization: AuthStr } })
     .then(response => {
       console.log(response);
        user.email = response.data.email;
        user.token = token;
        user.name = response.data.username;
        store.saveCurrentUser(user);
      })
     .catch((error) => {
         console.log('error ' + error);
      });
  }

};
