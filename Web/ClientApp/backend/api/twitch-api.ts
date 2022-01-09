import store from "@backend/store/store";
import axios from "axios";
import api from "./api";
import Result from '@models/Result';
import UserDto from "@models/user/UserDto";


export default {
  
  async GetCode(){
    const params = new URLSearchParams();

    params.append('client_id', 'go77bsdfxk4zcymadwmsm8470uyc7q')
    params.append('redirect_uri', 'https://localhost:9001')
    params.append('response_type', 'code')

    return await api.get(`https://id.twitch.tv/oauth2/authorize`, params);
  },

  async PostToken() {
    const params = new URLSearchParams();

    params.append('client_id', 'go77bsdfxk4zcymadwmsm8470uyc7q')
    params.append('client_secret', "ndnvv4dow70nkp0zb4uc4q5w7anuu4")
    params.append('grant_type', 'authorization_code')

    return await api.post(`https://id.twitch.tv/oauth2/token`, params);
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
