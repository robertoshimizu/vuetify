<template>
  <v-card :color="coverage.color" dark>
    <v-card-text>
      <v-sparkline
        :value="coverage.life"
        :labels="coverage.labels"
        color="rgba(255, 255, 255, .7)"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      />
    </v-card-text>

    <v-card-text class="text-center">
      <div class="display-1">{{ coverage.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LifeCoverageGraph",
  props: {
    coverage: {
      type: Object,
      required: true,
    },
  },
};
</script>
