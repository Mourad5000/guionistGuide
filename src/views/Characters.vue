<template>
  <v-data-table
    dense
    :headers="headers"
    :items="movies"
    :items-per-page="20"
    :loading="loader"
    loading-text="Loading... Please wait"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      headers: [
        { text: "Name", value: "name", align: "start", sortable: false },
        { text: "Birth", value: "birth", align: "start", sortable: false },
        { text: "Death", value: "death", align: "start", sortable: false },
        { text: "Gender", value: "gender", align: "start", sortable: false },
        { text: "Hair", value: "hair", align: "start", sortable: false },
        { text: "Height", value: "height", align: "start", sortable: false },
        { text: "Race", value: "race", align: "start", sortable: false },
        { text: "Realm", value: "realm", align: "start", sortable: false },
        { text: "Spouse", value: "spouse", align: "start", sortable: false },
        { text: "WikiUrl", value: "wikiUrl", align: "start", sortable: false }
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
<style>
.elevation-1 {
  padding: 30px;
}
</style>
