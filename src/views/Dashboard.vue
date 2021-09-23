<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      dense
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
  
</template>

<script>
// Static Import
import json from "../data/employees.json";

export default {
  name: "Dashboard",

  components: {},

  data() {
    return {
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Job Title", value: "title" },
        { text: "Salary", value: "salary" },
      ],
      employees: json,
    };
  },
};
</script>

<style></style>
