<template>
  <v-container>
    <section>
      <h1>Pagina do Calculo</h1>
      <ul>
        <li>1 - Calculo da cobertura: {{ CoberturaVidaComputed }}</li>
        <li>2 - Mostrar em uma range widget</li>
        <li>3- Tentar plotar gráfico - Lifestyle versus lifecycle</li>
        <li>4- Mostrar opções de preços e coberturas</li>
        <li>
          Foram removidos atributos com mencoes a metodos - date format "on" e
          date picker "attrs"
        </li>
      </ul>
    </section>
    <section>
      <v-container>
        <h1>Seu plano de Proteção de Estilo de Vida sob medida</h1>
        <p>
          Esta é uma sugestão de coberturas e limites. Você poderá alterá-las se
          quiser.
        </p>
        <v-container>
          <v-col cols="6">
            <v-card>
              <v-toolbar flat dense>
                <v-toolbar-title>
                  <span class="subheading"
                    >Seu valor de cobertura de vida:</span
                  >
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-row class="mb-4" justify="space-between">
                  <v-col class="text-left">
                    <span class="subheading font-weight-light mr-1">R$</span
                    ><span
                      class="text-h2 font-weight-light"
                      v-text="bpm"
                    ></span>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-slider
                v-model="bpm"
                max="1500000"
                min="50000"
                color="teal darken-2"
                track-color="teal lighten-3"
                ><template v-slot:prepend>
                  <v-icon @click="decrement"> mdi-minus </v-icon>
                </template>

                <template v-slot:append>
                  <v-icon @click="increment"> mdi-plus </v-icon>
                </template></v-slider
              >
            </v-card>
          </v-col>
          <v-col cols="6"></v-col>
        </v-container>
      </v-container>
    </section>
  </v-container>
</template>
<script>
export default {
  name: "Calculo",

  components: {},

  data: () => ({
    bpm: 750000,
    interval: null,
    // Receber via prop do componente anterior - questions.vue
    customerData: {
      nome: "John Doe",
      idade: "41",
      renda: "17000",
      profissao: "gerente comercial",
      profile: ["casado", "dependentes", "autonomo", "sucessao", "funerario"],
      dependentes: ["8", "6"],
    },
  }),
  computed: {
    CoberturaVidaComputed() {
      const renda = parseInt(this.customerData.renda);
      let custoAnual;
      if ((renda > 2000) & (renda < 6000)) {
        custoAnual = 1475 * 12;
      }
      if ((renda >= 6000) & (renda < 25000)) {
        custoAnual = 3435.14 * 12;
      }
      if (renda >= 25000) {
        custoAnual = 7246.38 * 12;
      }

      // const idade = parseInt(this.customerData.idade);
      const profiles = this.customerData.profile;
      let coberturaVida = 0;
      if (profiles.includes("dependentes")) {
        const dependentes = this.customerData.dependentes;
        if (dependentes.length > 0) {
          dependentes.forEach((dep) => {
            coberturaVida = coberturaVida + (23 - parseInt(dep)) * custoAnual;
          });
        }
        console.log(coberturaVida);
      }
      // gerar um csv ou json com dados para plotar grafico
      return coberturaVida;
    },
  },
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    },
  },
};
</script>
