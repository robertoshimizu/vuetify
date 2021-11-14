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
            <v-col cols="12" md="6">
              <v-card class="pa-2 mt-3">
                <v-toolbar flat dense>
                  <v-toolbar-title>
                    <span class="subheading"
                      >Seu valor de cobertura de vida:</span
                    >
                    <!-- <span class="subheading">{{ vidaCalculado }}</span> -->
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon v-on:click="bpm = vidaCalculado">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <v-row class="mb-4" justify="space-between">
                    <v-col class="text-left">
                      <span class="text-h2 font-weight-light"
                        >{{
                          new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(this.bpm)
                        }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-slider
                  v-model="bpm"
                  max="2500000"
                  min="50000"
                  step="10000"
                  color="teal darken-2"
                  track-color="teal lighten-3"
                  ><template v-slot:prepend>
                    <v-icon @click="decrement"> mdi-minus </v-icon>
                  </template>

                  <template v-slot:append>
                    <v-icon @click="increment"> mdi-plus </v-icon>
                  </template></v-slider
                >

                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Cobertura</th>
                        <th class="text-left">Limite</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in coberturas" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>
                          {{
                            new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.limite)
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
              <LifeCoverageGraph :coverage="lifeCoverage" class="mt-3" />
            </v-col>
            <v-col cols="12" md="6">
              <div v-for="option in options" :key="option.index">
                <OptionCard :product="option" />
              </div>
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
import OptionCard from "../components/InsuranceOptionCard.vue";

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

  components: {
    LifeCoverageGraph,
    OptionCard,
  },

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
    coberturas: null,
    options: [
      {
        index: 1,
        seguradora: "A",
        duration: "Vitalicio",
        price: "65",
        coberturas: ["morte"],
      },
      {
        index: 2,
        seguradora: "C",
        duration: "10",
        price: "143",
        coberturas: ["morte", "invalidez permanente total"],
      },
      {
        index: 3,
        seguradora: "A",
        duration: "Vitalicio",
        price: "185",
        coberturas: [
          "morte",
          "invalidez permanente total",
          "despesas funerárias individual",
        ],
      },
      {
        index: 4,
        duration: "Vitalicio",
        price: "202",
        coberturas: [
          "morte",
          "invalidez permanente total",
          "despesas funerárias individual",
          "doenças críticas",
        ],
      },
      {
        index: 5,
        seguradora: "E",
        duration: "Vitalicio",
        price: "253",
        coberturas: [
          "morte",
          "invalidez permanente total",
          "despesas funerárias individual",
          "diária de incapacidade temporária",
        ],
      },
      {
        index: 6,
        seguradora: "B",
        duration: "Vitalicio",
        price: "253",
        coberturas: [
          "morte",
          "invalidez permanente total",
          "despesas funerárias individual",
          "diária de incapacidade temporária",
          "doenças críticas",
        ],
      },
    ],
  }),
  watch: {
    bpm() {
      this.recalculo(this.bpm);
    },
  },
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    },
    recalculo(vida) {
      const coverages = [
        "morte",
        "invalidez permanente total",
        "doenças críticas",
        "diária de incapacidade temporária",
        "despesas funerárias individual",
      ];

      var arreio = [];
      for (let i = 0; i < coverages.length; i++) {
        const expr = coverages[i];
        var obj = {};
        obj["name"] = coverages[i];
        switch (expr) {
          case "morte":
            obj["limite"] = vida;
            arreio.push(obj);
            break;
          case "invalidez permanente total":
            obj["limite"] = vida;
            arreio.push(obj);
            break;
          case "doenças críticas":
            obj["limite"] = 50000;
            arreio.push(obj);
            break;
          case "diária de incapacidade temporária":
            obj["limite"] = 1000;
            arreio.push(obj);
            break;
          case "despesas funerárias individual":
            obj["limite"] = 5000;
            arreio.push(obj);
            break;
          default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
      }
      this.coberturas = arreio;
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
    this.recalculo(this.bpm);
  },
};
// 1 - Calculo da cobertura: {{ bpm }}</li>
// 2 - Mostrar em uma range widget</li>
// 3- Tentar plotar gráfico - Lifestyle versus lifecycle</li>
// 4- Mostrar opções de preços e coberturas</li>

// Foram removidos atributos com mencoes a metodos - date format "on" e
</script>
