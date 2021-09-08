<template>
  <v-card>
    <v-card-title>
      Movie
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search movie or quote"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="characterQuotes"
      :items-per-page="20"
      :loading="loader"
      loading-text="Loading... Please wait"
      mobile="true"
      item-key="_id"
      multi-sort
      :sort-by="['dialog.length']"
      :sort-desc="[false, true]"
      :search="search"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "CharacersQuote",
  data() {
    return {
      search: '',
      headers: [
        { text: "Quote", value: "dialog", align: "start" },
        { text: "Movie", value: "movieName", align: "start" },
      ],
    };
  },
  computed: {
    characterQuotes() {
      if (this.$store.state.characterQuotesWMovieId.length) {
        return this.$store.state.characterQuotesWMovieId;
      } else {
        return this.$store.dispatch(
          "getCharacterQuotes",
          this.$route.params.id
        );
      }
    },
    loader() {
      return this.$store.state.characterQuotesLoader;
    },
  },
};
</script>