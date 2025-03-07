<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://media.licdn.com/dms/image/v2/C4D0BAQEFijTMCOCZNQ/company-logo_200_200/company-logo_200_200/0/1630483413286/conecta_softwares_e_conecta_networking_logo?e=2147483647&v=beta&t=whRK5Jv9vmcMOYSIHyJfkTZaiUdhenqmx28XcADZzV0"
          subtitle="Soou Erp"
          title="Conecta"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#5b00fe">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To Do list</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
const items = [
  { text: "Home", icon: "mdi-folder", to: "/Home" },
  { text: "About", icon: "mdi-account-multiple", to: "/About" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: #27fdfe;
}
</style>
