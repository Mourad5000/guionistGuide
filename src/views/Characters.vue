<template>
  <v-data-table
    dense
    :headers="headers"
    :items="movies"
    :items-per-page="20"
    :loading="loader"
    loading-text="Loading... Please wait"
    mobile="true"
    multi-sort
    :sort-by="['race']"
    :sort-desc="[false, true]"
  >
    <template v-slot:top>
      <h1>The Lord of the Rings Characters</h1>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      singleExpand: false,
      headers: [
        { text: "Name", value: "name", align: "start" },
        { text: "Birth", value: "birth", align: "start" },
        { text: "Death", value: "death", align: "start" },
        { text: "Gender", value: "gender", align: "start" },
        { text: "Hair", value: "hair", align: "start" },
        { text: "Height", value: "height", align: "start" },
        { text: "Race", value: "race", align: "start" },
        { text: "Realm", value: "realm", align: "start" },
        { text: "Spouse", value: "spouse", align: "start" },
        { text: "WikiUrl", value: "wikiUrl", align: "start" }
      ]
    };
  },
  computed: {
    loader() {
      return this.$store.state.moviesLoader;
    },
    movies() {
      return this.$store.state.movies;
    }
  },

  created() {
    this.getMovies();
  },
  methods: {
    getMovies: function() {
      this.$store.dispatch("getMoviesAction");
    }
  }
};
</script>
