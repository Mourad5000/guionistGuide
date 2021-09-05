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
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
    item-key="_id"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td v-if="item.wikiUrl" :colspan="headers.length">
        More info about {{ item.name }} in:
        <a :href="item.wikiUrl" target="_blank" rel="noreferrer">{{item.wikiUrl}}</a>.
      </td>
      <td v-else :colspan="headers.length">
        Sorry, we have no more information from {{ item.name }}.
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      expanded: [],
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
        // { text: "WikiUrl", value: "wikiUrl", align: "start" }
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
