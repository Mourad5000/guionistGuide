<template>
    <v-card>
    <div v-if="backEndRequests === 0">
      <Alert alertType="info" body="There have been no requests to back-end"/>

    </div>
    <h1 class="font-weight-black display-3">Servers</h1>

    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="backEndRequests"
      :items-per-page="15"
    >
    </v-data-table>
    </v-card>
</template>

<script>
export default {
  name: "RequestsList",
  data() {
    return {
      headers: [
        { text: "Action", value: "action", align: "start" },
        { text: "Method", value: "method", align: "start" },
        { text: "Date", value: "date", align: "start" },
      ],
    };
  },

  computed: {
    backEndRequests() {
        console.log(this.$store.state.backEndRequests);
        return this.$store.state.backEndRequests;
    },
  },
};
</script>
