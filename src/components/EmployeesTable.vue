<template>
  <div>
    <v-data-table
      dense
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
      :multi-sort="true"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "EmployeesTable",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      headers: [
        {
          text: "Employee ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Job Title", value: "title" },
        { text: "Salary", value: "salary" },
      ],
    };
  },
  methods: {
    selectRow(event) {
      const employee = {
        name: event.name,
        title: event.title,
      };
      this.$emit("select-employee", employee);
    },
  },
};
</script>

<style lang="scss" scoped></style>
