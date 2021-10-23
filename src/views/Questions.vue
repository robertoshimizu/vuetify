<template>
  <v-container class="mt-10">
    <v-card class="mx-auto" width="800" height="auto">
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
            <v-radio-group v-model="radioGroup">
              <v-row>
                <v-col cols="12" sm="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-title class="text-h6 mb-1">
                          Iniciando a jornada
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Ainda estou decidindo se eu preciso de
                          seguro</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                      <v-radio class="mx-auto" value="1"></v-radio>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-title class="text-h6 mb-1">
                          Comparando preços
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Estou fazendo pesquisa e comparando
                          preços</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                      <v-radio class="mx-auto" value="2"></v-radio>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-title class="text-h6 mb-1">
                          Pronto para contratar
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Já sei o que quero: pronto para
                          contratar</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                      <v-radio class="mx-auto" value="3"></v-radio>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-radio-group>
          </v-container>
        </v-window-item>

        <v-window-item :value="2">
          <v-container>
            <v-btn-toggle v-model="toggle_exclusive" multiple>
              <v-row>
                <v-col cols="12" md="4">
                  <v-btn>
                    <v-card max-width="250" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="text-overline mb-4">OVERLINE</div>
                          <v-list-item-subtitle
                            >Sou casado ou tenho um relacionamento
                            estável</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-btn>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle
                          >Tenho crianças menores que 23 anos ou pretendo
                          ter</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle
                          >Sou profissional autônomo</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle
                          >Sou empregado regime CLT</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle
                          >Quero cobrir minhas despesas
                          funerárias</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card max-width="250" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle
                          >Quero planejar minha sucessão</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-btn-toggle>
          </v-container>
        </v-window-item>

        <v-window-item :value="3">
          <v-container>
            <v-form>
              <v-row>
                <v-col cols="4">
                  <v-card elevation="0" class="pa-2">
                    <v-text-field
                      outlined
                      v-model="dateFormatted"
                      label="Data de nascimento"
                      hint="formato DD/MM/AAAA "
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      v-model="renda"
                      :rules="rendaRules"
                      label="Renda mensal"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      v-model="renda"
                      :rules="rendaRules"
                      label="Profissão"
                      required
                    ></v-text-field>
                  </v-card>
                </v-col>
                <v-col cols="8">
                  <v-card outlined> </v-card>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <!-- <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption grey--text">Thanks for signing up!</span>
          </div> -->
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--"> Anterior </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
          Próximo
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-container>
      <p>Radio Group: {{ radioGroup }}</p>
      <p>Model: {{ toggle_exclusive }}</p>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Questions",
  data: () => ({
    step: 1,
    radioGroup: null,
    toggle_exclusive: [],
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Vamos Começar";
        case 2:
          return "Um pouco sobre você";
        default:
          return "Por último, alguns dados básicos";
      }
    },
  },
};
</script>
