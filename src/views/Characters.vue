<template>
  <v-card>
       <div v-if="characterError">
      <Alert alertType="error" :body="errorMessages.LOAD_API_ERROR_MESSAGE('characters')"/>
    </div>
  <v-data-table
    dense
    :headers="headers"
    :items="characters"
    :items-per-page="20"
    :loading="loader"
    loading-text="Loading... Please wait"
    mobile="true"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
    item-key="_id"
    class="characters__table"
    @click:row="handleCharacterClick"
    multi-sort
    :sort-by="['race']"
    :sort-desc="[false, true]"
  >
    <template v-slot:top>
      <h1>Characters list</h1>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td v-if="item.wikiUrl" :colspan="headers.length">
        More info about {{ item.name }} in:
        <a :href="item.wikiUrl" target="_blank" rel="noreferrer">{{
          item.wikiUrl
        }}</a
        >.
      </td>
      <td v-else :colspan="headers.length">
        Sorry, we don't have more information of {{ item.name }}.
      </td>
    </template>
  </v-data-table>
  </v-card>
</template>

<script>

// constants
import errorMessages from '../constants/errorMessages';

// components
import Alert from '../components/Alert.vue';

export default {
  name: "Characters",
  components:{Alert},
  data() {
    return {
      errorMessages:errorMessages,
      expanded: [],
      singleExpand: true,
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
      ],
    };
  },
  computed: {
    loader() {
      return this.$store.state.charactersLoader;
    },
    characters() {
      return this.$store.state.characters;
    },
    characterError(){
      return this.$store.state.charactersApiError;
    }
  },

  created() {
    this.getCharacters();
  },
  methods: {
    getCharacters: function () {
      this.$store.dispatch("getCharacters");
    },
    handleCharacterClick(value) {
      // hacer el dispatch del detalle del character con el id y el nombe
      this.$store.dispatch("getCharacterQuotes", value._id);
      this.$router.push({ path: `/${value._id}` });
    },
  },
};
</script>

<style>
.characters__table {
  cursor: pointer;
}
</style>
