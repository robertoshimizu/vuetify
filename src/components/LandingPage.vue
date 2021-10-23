<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <h2 class="headline font-weight-bold mb-3">
          Pronto para experimentar?
        </h2>
        <v-btn to="/questions" class="ml-4" color="primary" elevation="2" large
          >Iniciar</v-btn
        >
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
  provide: {
    theme: { isDark: true },
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>
