import axios from "axios";
import appsettings from "../../appsettings.json";
import appDevSettings from "../../appsettingsDev.json";

export type AppSettingKeys = keyof typeof appsettings;

export class AppSettings {
    public settings;

    public async init() {
        
        console.log(process.env);
        if (process.env.NODE_ENV == "development") {
           this.settings = (await axios.get(appDevSettings as any)).data;
        } else {
           this.settings = (await axios.get(appsettings as any)).data;
        }
     }

    public getSetting(key: AppSettingKeys): string {
       return this.settings[key];
    }
 }

 const store = new AppSettings();

export default store;
