<template>
  <v-data-table
    dense
    :loading="loader"
    loading-text="Loading... Please wait"

  >
    <template>
       <td v-if="characterQuotes.docs>1">
    There is not quotes for this character
  </td>
    </template>
  <template v-slot:top>
        <h1>Quotes</h1>
    </template>

 
  </v-data-table>
</template>

<script>
export default {
  name: "CharacersQuote",

  data(){
    return {
      headers:[

      ]
    }
  },
  computed: {
    characterQuotes() {
        if (this.$store.state.characterQuotes) {
            return this.$store.state.characterQuotes;
        } else {
            return this.$store.dispatch('getCharacterQuotes',this.$route.params.id);
        } 
    },

    loader() {
      return this.$store.state.characterQuotesLoader;
    }
  },
};
</script>
