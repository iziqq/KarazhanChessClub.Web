const HomePage = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "home" */ "@components/Home/home-page.vue");
const GuildApplicationCreate = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "guildApplicationCreate" */ "@components/GuildApplications/guild-application-create-page.vue");
const GuildApplicationMine = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "guildApplicationMine" */ "@components/GuildApplications/guild-application-mine-page.vue");
const GuildApplicationOverview = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "guildApplicationOverview" */ "@components/GuildApplications/guild-application-overview-page.vue");
const TalentCalculatorPage = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "talentCalcu" */ "@components/TalentCalculator/talent-calculator-page.vue");
const RaidCompositionPage = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "raidCompo" */ "@components/RaidComposition/raid-composition-page.vue");
const LoginPage = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "login" */ "@components/Login/login-page.vue");
const GuildApplicationEdit = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "guildApplicationEdit" */ "@components/GuildApplications/guild-application-edit-page.vue");
const MembersPage = () =>import(/* webpackPrefetch: true */ /* webpackChunkName: "membersPage" */ "@components/Members/members-page.vue");

export default [
  {
    path: "/login",
    component: LoginPage,
    meta: {
       title: "Login",
       requiresAuth: false,
    },
    name: "Login"
 },
 {
  path: "/guildApplications/create",
  component: GuildApplicationCreate,
  meta: {
     title: "Want to join ?",
     requiresAuth: true,
  },
  name: "CreateApplication"
},
{
  path: "/guildApplications/mine",
  component: GuildApplicationCreate,
  meta: {
     title: "Want to join ?",
     requiresAuth: true,
  },
  name: "MineApplication"
},
{
  path: "/guildApplications/:id",
  component: GuildApplicationEdit,
  meta: {
     title: "Want to join ?",
     requiresAuth: true,
  },
  name: "EditApplication"
},
{
  path: "/guildApplications",
  component: GuildApplicationOverview,
  meta: {
     title: "Want to join ?",
     requiresAuth: true,
  },
  name: "Applications"
},
{
  path: "/talentcalculator",
  component: TalentCalculatorPage,
  meta: {
     title: "Talent Calculator",
     requiresAuth: false,
  },
  name: "TalentCalculator"
},
{
  path: "/raidcomposition",
  component: RaidCompositionPage,
  meta: {
     title: "Raid Composition",
     requiresAuth: false,
  },
  name: "RaidComposition"
},
{
  path: "/members",
  component: MembersPage,
  meta: {
     title: "Members",
     requiresAuth: false,
  },
  name: "Members"
},
{
  path: "/",
  component: HomePage,
  meta: {
     title: "Menu",
     requiresAuth: false,
  },
  name: "Home"
},
  {
    path: "*",
    component: HomePage,
    meta: {
      title: "Page not found",
      requiresAuth: false,
    }
  },

];
