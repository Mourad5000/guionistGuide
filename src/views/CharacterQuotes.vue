<template>
  <h1>SOy el componente quotes</h1>
</template>

<script>
export default {
  name: "CharacersQuote",

  computed: {
    characterQuotes() {
        console.log(this.$store.state.characterQuotes);
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
