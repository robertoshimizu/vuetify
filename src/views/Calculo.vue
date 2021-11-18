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
                  <v-btn icon v-on:click="vida = vidaCalculado">
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
                          }).format(this.vida)
                        }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-slider
                  v-model="vida"
                  max="2500000"
                  min="50000"
                  step="10000"
                  color="teal darken-2"
                  track-color="teal lighten-3"
                  ><template v-slot:prepend>
                    <v-icon @click="decrement_vida"> mdi-minus </v-icon>
                  </template>

                  <template v-slot:append>
                    <v-icon @click="increment_vida"> mdi-plus </v-icon>
                  </template></v-slider
                >

                <!-- <v-simple-table dense>
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
                </v-simple-table> -->
              </v-card>
              
              
              <!-- <v-card>
                <v-row>
                  <v-col cols="6" align-self="center" class="text-left"
                    >morte</v-col
                  >
                  <v-col cols="6">
                    <div class="font-weight-light text-center text-caption">
                      {{
                        new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(this.bpm)
                      }}
                    </div>
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
                  </v-col>
                </v-row>
              </v-card> -->
              <v-card>
                <v-row>
                  <v-col cols="6" align-self="center" class="text-left"
                    >invalidez permanente total</v-col
                  >
                  <v-col cols="6">
                    <div class="font-weight-light text-center text-caption">
                      {{
                        new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(this.ipa)
                      }}
                    </div>
                    <v-slider
                      v-model="ipa"
                      max="2500000"
                      min="50000"
                      step="10000"
                      color="teal darken-2"
                      track-color="teal lighten-3"
                      ><template v-slot:prepend>
                        <v-icon @click="decrement_ipa"> mdi-minus </v-icon>
                      </template>

                      <template v-slot:append>
                        <v-icon @click="increment_ipa"> mdi-plus </v-icon>
                      </template></v-slider
                    >
                  </v-col>
                </v-row>
              </v-card>
              <v-card>
                <v-row>
                  <v-col cols="7" align-self="center" class="text-left"
                    >doenças críticas</v-col
                  >
                  <v-col cols="5">
                    <v-select
                      v-model="dg1"
                      :items="dgs"
                      solo
                      menu-props="auto"
                      hide-details
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card>
              <v-card>
                <v-row>
                  <v-col cols="7" align-self="center" class="text-left"
                    >diária de incapacidade temporária</v-col
                  >
                  <v-col cols="5">
                    <v-select
                      v-model="dit1"
                      :items="dits"
                      solo
                      menu-props="auto"
                      hide-details
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card>
              <v-card>
                <v-row>
                  <v-col cols="7" align-self="center" class="text-left"
                    >despesas funerárias individual</v-col
                  >
                  <v-col cols="5">
                    <v-select
                      v-model="saf1"
                      :items="safs"
                      solo
                      menu-props="auto"
                      hide-details
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
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
import QuoteGenerator from "../model/selectProduct.js";

function custoEduc(renda) {
  if ((renda > 2000) & (renda < 6000)) {
    return 1475 * 12;
  } else if ((renda >= 6000) & (renda < 25000)) {
    return 3435.14 * 12;
  } else if (renda >= 25000) {
    return 7246.38 * 12;
  } else return null;
}

function coberturasSugeridas(customerData, custoAnual) {
  const profiles = customerData.profile;
  let coberturaVida = 0;
  if (profiles.includes("dependentes")) {
    const dependentes = customerData.dependentes;
    if (dependentes.length > 0) {
      dependentes.forEach((dep) => {
        coberturaVida = coberturaVida + (23 - parseInt(dep)) * custoAnual;
      });
      return { 
        vida: parseInt(coberturaVida), 
        ipa: parseInt(coberturaVida),
        dg: 50000,
        dit: 1000,
        saf: 5000 
        };
    }
    return { 
        vida: parseInt(customerData.renda) * 24, 
        ipa: parseInt(customerData.renda) * 24,
        dg: 50000,
        dit: 1000,
        saf: 5000 
        };
    
    
    
  } else return { 
        vida: parseInt(customerData.renda) * 24, 
        ipa: parseInt(customerData.renda) * 24,
        dg: 50000,
        dit: 1000,
        saf: 5000 
        };
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
    vida: null,
    ipa: null,
    interval: null,
    vidaCalculado: null,
    generator: null,
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
    options: null,
    dg1: "R$ 100.000,00",
    dgs: [
      "R$ 50.000,00",
      "R$ 100.000,00",
      "R$ 150.000,00",
      "R$ 200.000,00",
      "R$ 250.000,00",
      "R$ 300.000,00",
    ],
    dit1: "R$ 1.000,00",
    dits: ["R$ 500,00", "R$ 1.000,00", "R$ 1.500,00", "R$ 2.000,00"],
    saf1: "R$ 5.000,00",
    safs: ["R$ 5.000,00", "R$ 10.000,00"],
  }),
  watch: {
    vida() {
      this.recalculo(this.vida, this.ipa, 50000, 1000, 5000);
    },
    ipa() {
      this.recalculo(this.vida, this.ipa, 50000, 1000, 5000);
    },
  },
  methods: {
    decrement_vida() {
      this.vida--;
    },
    increment_vida() {
      this.vida++;
    },
    decrement_ipa() {
      this.ipa--;
    },
    increment_ipa() {
      this.ipa++;
    },
    recalculo(morte, ipa, dg, dit, saf) {
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
            obj["limite"] = morte;
            arreio.push(obj);
            break;
          case "invalidez permanente total":
            obj["limite"] = ipa;
            arreio.push(obj);
            break;
          case "doenças críticas":
            obj["limite"] = dg;
            arreio.push(obj);
            break;
          case "diária de incapacidade temporária":
            obj["limite"] = dit;
            arreio.push(obj);
            break;
          case "despesas funerárias individual":
            obj["limite"] = saf;
            arreio.push(obj);
            break;
          default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
      }
      this.coberturas = arreio;
      this.options = this.generator.getRates(morte, ipa, dg, dit, saf);
    },
  },
  created() {
    console.log(this.customerData.sexo);
    const renda = parseInt(this.customerData.renda);

    const custoAnual = custoEduc(renda);
    var { vida,ipa,dg,dit,saf } = coberturasSugeridas(this.customerData, custoAnual);
    this.vida = vida;
    this.ipa = ipa;
    this.dg = dg;
    this.dit = dit;
    this.saf = saf;
    this.vidaCalculado = this.vida;

    console.log(vida);

    // gerar um csv ou json com dados para plotar grafico
    let taxa = this.tabelaSeg[0].taxas;
    let ref = this.customerData.idade;

    let foo = taxa.find((el) => el.idade === ref);
    console.log("Idade: " + ref + "   Taxa: " + foo.M);
    this.generator = new QuoteGenerator();
    this.recalculo(this.vida, this.ipa, 50000, 1000, 5000);
  },
};
// 1 - Calculo da cobertura: {{ bpm }}</li>
// 2 - Mostrar em uma range widget</li>
// 3- Tentar plotar gráfico - Lifestyle versus lifecycle</li>
// 4- Mostrar opções de preços e coberturas</li>

// Foram removidos atributos com mencoes a metodos - date format "on" e
</script>
