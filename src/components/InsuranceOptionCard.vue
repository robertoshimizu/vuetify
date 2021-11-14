<template>
  <v-card class="pa-2 mt-3">
    <v-row>
      <v-col cols="6">
        <p>preço</p>
        <p style="font-size: 2rem">
          {{
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)
          }}
          <span style="font-size: 1rem">/mês</span>
        </p>
      </v-col>
      <v-col cols="3">
        <p>duração</p>
        <p style="font-size: 2rem">
          {{ product.duration }} <span style="font-size: 1rem">anos</span>
        </p>
      </v-col>
      <v-col cols="3" align-self="center" style="padding: 1rem">
        <v-btn rounded color="error" class="pa-4 caption font-weight-bold" dark
          >Continuar</v-btn
        >
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div style="padding: 1rem">
      <v-row class="body-2">
        <v-col>morte natural e acidental</v-col>
        <v-col>invalidez permanente total</v-col>
      </v-row>
      <v-row class="body-2">
        <v-col>invalidez permanente por doença</v-col>
        <v-col>cobertura adicional morte acidental</v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "OptionCard",
  data: () => ({
    product: {
      price: 125,
      duration: "10",
    },
  }),
  // props: [
  //     'product'
  //   ],
};
</script>

<style></style>
