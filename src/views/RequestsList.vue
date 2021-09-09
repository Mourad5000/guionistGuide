<template>
    <v-card>
    <div v-if="this.$store.state.backEndRequests.length === 0">
      <Alert alertType="info" body="There are no requests to the back end yet"/>
    </div>
    <v-data-table
          class="characters__table"
      :headers="headers"
      :items="backEndRequests"
      :items-per-page="15"
      :sort-by="['date']"
      mobile="true"
    >
    </v-data-table>
    </v-card>
</template>

<script>
import Alert from '../components/Alert.vue'
export default {
  name: "RequestsList",
  components:{
      Alert
  },
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
