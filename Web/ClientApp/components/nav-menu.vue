<template>
  <v-card v-if="!loading && !isLogin()">
    <v-navigation-drawer
      :mini-variant="miniMenu"
      permanent
      app
      width="245"
      mini-variant-width="100"
      class="nav-bar"
    >
      <!-- Mini button -->

      <v-list-item v-if="miniMenu && showResizable">
        <v-btn icon @click.stop.prevent="miniMenu = !miniMenu">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-list-item dark>
        <v-img :src="logo"></v-img>
      </v-list-item>

      <!-- MENU -->
      <v-list dark>
        <!-- basic buttons -->
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          @click="onBtnClick(item)"
          class="list-item"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <!-- group buttons -->
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-human-greeting</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Applications</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in guildApplications"
            :key="item.title"
            @click="onBtnClick(item)"
            class="list-item"
          >
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content :url="item.url" :itemTitle="item.title">
              <v-list-item-title :url="item.url" :itemTitle="item.title">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-card-bulleted</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Guides</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in guides"
            :key="item.title"
            @click="onBtnClick(item)"
            class="list-item"
          >
            <v-list-item-icon>
              <class-img :showClass="item.classId" class="class-icon" />
            </v-list-item-icon>
            <v-list-item-content :url="item.url" :itemTitle="item.title">
              <v-list-item-title :url="item.url" :itemTitle="item.title">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item @click="logout()" class="list-item">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LogOut</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import NavbarDto from "@models/NavbarDto";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import globalStore from "@backend/store/store";
import EventBus from "@models/EventBus";
import Events from "@models/shared/Events";
import Logo from "@resources/Caption.png";
import classImg from "@components/shared/class-img.vue";

@Component({
  name: "NavMenu",
  components: { classImg }
})
export default class NavMenu extends Vue {
  miniMenu: boolean = false;
  userName: string = "";
  loading: boolean = false;
  logo = Logo;

  @Prop({ default: false })
  mini;

  @Watch("mini", { deep: true })
  onMiniValueChanged() {
    this.miniMenu = this.mini;
  }

  onBtnClick(item: NavbarDto) {
    if (!item.isActive) {
      this.guides.forEach(i => {
        i.isActive = false;
      });

      this.guildApplications.forEach(i => {
        i.isActive = false;
      });

      this.menu.forEach(i => {
        i.isActive = false;
      });
      this.$router.push({ path: `${item.url}` });
      item.isActive = true;
    }
  }

  isActive(item: NavbarDto): boolean {
    if (item.isActive) return true;
    return false;
  }

  isLogin(): boolean {
    if (this.$route.path == "/login") {
      return true;
    }
    return false;
  }

  get showResizable(): boolean {
    return !this.$vuetify.breakpoint.mobile;
  }

  logout() {
    globalStore.clearToken();
    globalStore.clearCurrentUser();
    EventBus.$emit(Events.UserLoggedOut);
    this.$router.push({ path: `/login` });
  }

  mounted() {
    this.loading = true;
    var base = this;
    EventBus.$on(Events.UserLoggedIn, () => {
      base.$nextTick(() => {
        base.$forceUpdate();
      });
    });
    EventBus.$on(Events.UserLoggedOut, () => {
      base.$nextTick(() => {
        base.$forceUpdate();
      });
    });
    this.loading = false;
  }

  menu: NavbarDto[] = [
    {
      title: "Dashboard",
      icon: "mdi-view-dashboard",
      url: "/",
      isActive: true
    },
    {
      title: "Members",
      icon: "mdi-account-group",
      url: "/members",
      isActive: false
    },
    {
      title: "Talent Calculator",
      icon: "mdi-calculator",
      url: "/talentcalculator",
      isActive: false
    },
    {
      title: "Raid composition",
      icon: "mdi-account-group",
      url: "/raidcomposition",
      isActive: false
    }
  ];

  guildApplications = [
    {
      id: 1,
      title: "Create application",
      icon: "",
      url: "/guildApplications/create",
      isActive: false
    },
    {
      id: 2,
      title: "My applications",
      icon: "",
      url: "/guildApplications/1",
      isActive: false
    },
    {
      id: 3,
      title: "All applications",
      icon: "",
      url: "/guildApplications",
      isActive: false
    }
  ];

  guides = [
    {
      id: 1,
      title: "DK",
      classId: 1,
      url: "/classGuid/1",
      isActive: false
    },
    {
      id: 2,
      title: "Warrior",
      classId: 2,
      url: "/classGuid/2",
      isActive: false
    },
    {
      id: 3,
      title: "Paladin",
      classId: 3,
      url: "/classGuid/3",
      isActive: false
    },
    {
      id: 4,
      title: "Shaman",
      classId: 4,
      url: "/classGuid/4",
      isActive: false
    },
    {
      id: 5,
      title: "Hunter",
      classId: 5,
      url: "/classGuid/5",
      isActive: false
    },
    {
      id: 6,
      title: "Rogue",
      classId: 6,
      url: "/classGuid/6",
      isActive: false
    },
    {
      id: 7,
      title: "Druid",
      classId: 7,
      url: "/classGuid/7",
      isActive: false
    },
    {
      id: 8,
      title: "Priest",
      classId: 8,
      url: "/classGuid/8",
      isActive: false
    },
    {
      id: 9,
      title: "Mage",
      classId: 9,
      url: "/classGuid/9",
      isActive: false
    },
    {
      id: 10,
      title: "Warlock",
      classId: 10,
      url: "/classGuid/10",
      isActive: false
    }
  ];
}
</script>

<style scoped>
.list-item:hover {
  background: rgb(58, 57, 0);
}

.nav-bar {
  background: rgb(13, 13, 13) !important;
}

.selected-item {
  background: rgb(26, 26, 26);
}

.class-icon {
  width: 25px;
  height: 25px;
}
</style>
