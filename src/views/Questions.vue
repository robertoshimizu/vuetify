<template>
  <v-container class="mt-10">
    <v-card class="mx-auto" width="800" height="330">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-card max-width="250" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-actions>
                    <v-btn outlined rounded text> Button </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-actions>
                    <v-btn outlined rounded text> Button </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-actions>
                    <v-btn outlined rounded text> Button </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-text-field label="Password" type="password"></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              Please enter a password for your account
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Questions",
  data: () => ({
    step: 1,
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Vamos Começar";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
  },
};
</script>
<!-- <v-card-text>
              <v-text-field
                label="Email"
                value="john@vuetifyjs.com"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                This is the email you will use to login to your Vuetify account
              </span>
            </v-card-text> -->