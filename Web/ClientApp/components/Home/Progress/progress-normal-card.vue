<template>
  <v-card class="progress-card" dark>
    <v-card-title>
      RAID PROGRESS - NORMAL
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="raid in progressNormal" :key="raid.name">
          <v-card-subtitle class="card-subtitle">{{
            raid.title
          }}</v-card-subtitle>
          <v-list subheader two-line flat>
            <v-list-item-group multiple>
              <v-list-item v-for="boss in raid.bosses" :key="boss.name">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                      v-model="boss.isKilled"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ boss.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      boss.killDate
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import progressDto from "@models/progressDto";
@Component({
  name: "MembersPage",
  components: {}
})
export default class MembersPage extends Vue {
  loading: boolean = false;
  progressHC: progressDto[] = [
    {
      id: 1,
      title: "BoT",
      bosses: [
        {
          id: 1,
          name: "Halfus Wyrmbreaker",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 2,
          name: "Valiona & Theralion",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 3,
          name: "Ascendant Council",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 4,
          name: "Cho'gall",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 5,
          name: "Sinestra",
          isKilled: false,
          killDate: "-"
        }
      ]
    },
    {
      id: 2,
      title: "BWD",
      bosses: [
        {
          id: 5,
          name: "Magmaw",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 6,
          name: "Omnotron Defense System",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 7,
          name: "Maloriak",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 8,
          name: "Atramedes",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 9,
          name: "Chimaeron",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 10,
          name: "Nefarian",
          isKilled: false,
          killDate: "-"
        }
      ]
    },
    {
      id: 3,
      title: "To4W",
      bosses: [
        {
          id: 11,
          name: "Conclave of Wind",
          isKilled: false,
          killDate: "-"
        },
        {
          id: 12,
          name: "Al'Akir",
          isKilled: false,
          killDate: "-"
        }
      ]
    }
  ];

  progressNormal: progressDto[] = [
    {
      id: 1,
      title: "BoT",
      bosses: [
        {
          id: 1,
          name: "Halfus Wyrmbreaker",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 2,
          name: "Valiona & Theralion",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 3,
          name: "Ascendant Council",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 4,
          name: "Cho'gall",
          isKilled: true,
          killDate: "03/01/2022"
        }
      ]
    },
    {
      id: 2,
      title: "BWD",
      bosses: [
        {
          id: 5,
          name: "Magmaw",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 6,
          name: "Omnotron Defense System",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 7,
          name: "Maloriak",
          isKilled: true,
          killDate: "04/01/2022"
        },
        {
          id: 8,
          name: "Atramedes",
          isKilled: true,
          killDate: "04/01/2022"
        },
        {
          id: 9,
          name: "Chimaeron",
          isKilled: true,
          killDate: "04/01/2022"
        },
        {
          id: 10,
          name: "Nefarian",
          isKilled: true,
          killDate: "04/01/2022"
        }
      ]
    },
    {
      id: 3,
      title: "To4W",
      bosses: [
        {
          id: 11,
          name: "Conclave of Wind",
          isKilled: true,
          killDate: "03/01/2022"
        },
        {
          id: 12,
          name: "Al'Akir",
          isKilled: true,
          killDate: "03/01/2022"
        }
      ]
    }
  ];
  mounted() {}
}
</script>

<style></style>
