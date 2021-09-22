<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-content>
      <!-- different pages comes here controlled by the router -->
      <router-view></router-view>
    </v-content>
    <!-- Footer -->
    <v-footer padless color="primary lighten-1" dark class="mt-5">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
  },

  data: () => ({
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Login",
        url: "/login",
      },
      {
        label: "About",
        url: "/about",
      },
    ],
  }),
};
</script>
