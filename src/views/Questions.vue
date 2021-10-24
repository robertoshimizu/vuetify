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
            <v-radio-group v-model="purpose">
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
            <v-row>
              <v-col cols="12" md="4">
                <v-hover>
                  <v-card max-width="250" min-height="120" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-card-actions>
                          <v-checkbox
                            class="mx-auto"
                            v-model="selected"
                            color="red"
                            value="casado"
                            hide-details
                          ></v-checkbox>
                        </v-card-actions>
                        <v-list-item-subtitle
                          >Sou casado ou tenho um relacionamento
                          estável</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" min-height="120" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-actions>
                        <v-checkbox
                          class="mx-auto"
                          v-model="selected"
                          color="red"
                          value="dependentes"
                          hide-details
                        ></v-checkbox>
                      </v-card-actions>
                      <v-list-item-subtitle
                        >Tenho dependentes menores que 23
                        anos</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" min-height="120" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-actions>
                        <v-checkbox
                          class="mx-auto"
                          v-model="selected"
                          color="red"
                          value="autonomo"
                          hide-details
                        ></v-checkbox>
                      </v-card-actions>
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
                <v-card max-width="250" min-height="120" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-actions>
                        <v-checkbox
                          class="mx-auto"
                          v-model="selected"
                          color="red"
                          value="empregado"
                          hide-details
                        ></v-checkbox>
                      </v-card-actions>
                      <v-list-item-subtitle
                        >Sou empregado regime CLT</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" min-height="120" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-actions>
                        <v-checkbox
                          class="mx-auto"
                          v-model="selected"
                          color="red"
                          value="funerario"
                          hide-details
                        ></v-checkbox>
                      </v-card-actions>
                      <v-list-item-subtitle
                        >Quero cobrir minhas despesas
                        funerárias</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card max-width="250" min-height="120" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-actions>
                        <v-checkbox
                          class="mx-auto"
                          v-model="selected"
                          color="red"
                          value="sucessao"
                          hide-details
                        ></v-checkbox>
                      </v-card-actions>
                      <v-list-item-subtitle
                        >Quero planejar minha sucessão</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
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
                      v-model="profissao"
                      :rules="rendaRules"
                      label="Profissão"
                      required
                    ></v-text-field>
                  </v-card>
                </v-col>
                <v-col cols="8">
                  <v-card elevation="0" class="pa-2">
                    <v-combobox
                      v-model="select"
                      :items="numdep"
                      label="Número de dependentes"
                      clearable
                      outlined
                    ></v-combobox>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age1"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age2"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age3"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age4"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age5"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          outlined
                          v-model="age6"
                          :rules="rendaRules"
                          label="Idade"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>
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
        <div v-if="step < 3">
          <v-btn
            :disabled="step === 3"
            color="primary"
            depressed
            @click="step++"
          >
            Próximo
          </v-btn>
        </div>
        <div v-else>
          <v-btn to="/calculo" color="error"> calcular</v-btn>
        </div>
      </v-card-actions>
    </v-card>
    <v-container>
      <p>Objetivo: {{ purpose }}</p>
      <p>Model: {{ toggle_exclusive }}</p>
      <p>Options: {{ selected }}</p>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Questions",
  data: () => ({
    step: 1,
    purpose: null,
    marital: false,
    toggle_exclusive: [],
    selected: [],
    numdep: [1, 2, 3, 4, 5, 6],
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
