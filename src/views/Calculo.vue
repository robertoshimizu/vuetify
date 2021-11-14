<template>
  <v-container>
    <section>
      <v-container>
        <h1>Seu plano de Proteção de Estilo de Vida sob medida</h1>
        <p>
          Esta é uma sugestão de coberturas e limites. Você poderá alterá-las se
          quiser.
        </p>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-card class="pa-2 mt-3">
                <v-toolbar flat dense>
                  <v-toolbar-title>
                    <span class="subheading"
                      >Seu valor de cobertura de vida:</span
                    >
                    <span class="subheading">{{ vidaCalculado }}</span>
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
                  max="2500000"
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
                <h4>Coberturas básicas:</h4>
                <ul>
                  <li>morte natural e acidental</li>
                  <li>invalidez permanente total</li>
                </ul>
                <h4>Coberturas complementares:</h4>
                <ul>
                  <li>
                    incapacidade temporal: diária de incapacidade, diária por
                    hospitalização ou renda por incapacidade
                  </li>
                  <li>doenças críticas</li>
                  <li>despesas funerárias</li>
                </ul>
              </v-card>
              <LifeCoverageGraph :coverage="lifeCoverage" class="mt-3" />
            </v-col>
            <v-col cols="6">
              <v-card class="pa-2 mt-3">
                <v-row>
                  <v-col>
                    <p>preço</p>
                    <p>10</p>
                  </v-col>
                  <v-col>
                    <p>duração</p>
                    <p>10</p>
                  </v-col>
                  <v-btn rounded color="error" class="pa-2" dark
                    >Continuar</v-btn
                  >
                </v-row>
                <v-divider></v-divider>
                Coberturas
                <v-row>
                  <v-col>morte natural e acidental</v-col>
                  <v-col>invalidez permanente total</v-col>
                  <v-col>invalidez permanente por doença</v-col>
                </v-row>
              </v-card>
              <v-card class="pa-2 mt-3">
                <v-row>
                  <v-col>
                    <p>preço</p>
                    <p>10</p>
                  </v-col>
                  <v-col>
                    <p>duração</p>
                    <p>10</p>
                  </v-col>
                  <v-btn rounded color="error" class="pa-2" dark
                    >Continuar</v-btn
                  >
                </v-row>
                <v-divider></v-divider>
                Coberturas
                <v-row>
                  <v-col>morte natural e acidental</v-col>
                  <v-col>invalidez permanente total</v-col>
                  <v-col>invalidez permanente por doença</v-col>
                </v-row>
                <v-row>
                  <v-col>cobertura adicional morte acidental</v-col>
                  <v-col> </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-card>
              <v-card class="pa-2 mt-3">
                <v-row>
                  <v-col>
                    <p>preço</p>
                    <p>10</p>
                  </v-col>
                  <v-col>
                    <p>duração</p>
                    <p>10</p>
                  </v-col>
                  <v-btn rounded color="error" class="pa-2" dark
                    >Continuar</v-btn
                  >
                </v-row>
                <v-divider></v-divider>
                Coberturas
                <v-row>
                  <v-col>morte natural e acidental</v-col>
                  <v-col>invalidez permanente total</v-col>
                  <v-col>invalidez permanente por doença</v-col>
                </v-row>
                <v-row>
                  <v-col>doenças críticas</v-col>
                  <v-col> </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>
  </v-container>
</template>
<script>
import lifeCoverage from "../data/lifeCoverage.json";
import LifeCoverageGraph from "../components/LifeCoverageGraph";
import seguradoraXPTO from "../data/seguradoraXPTO.json";

function custoEduc(renda) {
  if ((renda > 2000) & (renda < 6000)) {
    return 1475 * 12;
  } else if ((renda >= 6000) & (renda < 25000)) {
    return 3435.14 * 12;
  } else if (renda >= 25000) {
    return 7246.38 * 12;
  } else return null;
}

function coberturaVida(customerData, custoAnual) {
  const profiles = customerData.profile;
  let coberturaVida = 0;
  if (profiles.includes("dependentes")) {
    const dependentes = customerData.dependentes;
    if (dependentes.length > 0) {
      dependentes.forEach((dep) => {
        coberturaVida = coberturaVida + (23 - parseInt(dep)) * custoAnual;
      });
      return coberturaVida;
    }
    return parseInt(customerData.renda) * 24;
  } else return parseInt(customerData.renda) * 24;
}

export default {
  name: "Calculo",

  components: { LifeCoverageGraph },

  data: () => ({
    lifeCoverage: lifeCoverage,
    tabelaSeg: seguradoraXPTO,
    bpm: 750000,
    interval: null,
    vidaCalculado: null,
    // Receber via prop do componente anterior - questions.vue
    customerData: {
      nome: "John Doe",
      sexo: "masculino",
      idade: "46",
      renda: "17000",
      profissao: "gerente comercial",
      profile: ["casado", "dependentes", "autonomo", "sucessao", "funerario"],
      dependentes: ["8", "6"],
    },
  }),
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    },
  },
  created() {
    console.log(this.customerData.sexo);
    const renda = parseInt(this.customerData.renda);

    const custoAnual = custoEduc(renda);
    this.bpm = coberturaVida(this.customerData, custoAnual);
    this.vidaCalculado = this.bpm;

    // gerar um csv ou json com dados para plotar grafico
    let taxa = this.tabelaSeg[0].taxas;
    let ref = this.customerData.idade;

    let foo = taxa.find((el) => el.idade === ref);
    console.log("Idade: " + ref + "   Taxa: " + foo.M);
  },
};
// 1 - Calculo da cobertura: {{ bpm }}</li>
// 2 - Mostrar em uma range widget</li>
// 3- Tentar plotar gráfico - Lifestyle versus lifecycle</li>
// 4- Mostrar opções de preços e coberturas</li>

// Foram removidos atributos com mencoes a metodos - date format "on" e
</script>
