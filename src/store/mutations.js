import actionTypes from "../constants/actionTypes";

export default {
  CHARACTERS_LOADING(state) {
    state.charactersLoader = true;
  },

  LOAD_CHARACTERS(state, characters) {
    state.characters = characters;
    state.charactersLoader = false;
  },

  LOAD_CHARACTERS_ERROR(state, apiError) {
    state.charactersApiError = false;
    state.charactersLoader = apiError;
  },
  // 

  SET_CHARACTER_LOADING(state){
    state.characterQuotesLoader = true;
  },

  LOAD_CHARACTERS_QUOTES(state, characterQuotes){
    state.characterQuotesLoader = false;
    state.characterQuotes=characterQuotes;
  },

  LOAD_CHARACTERS_QUOTES_ERROR(state, apiError){
    state.characterQuotesLoader = false;
    state.characterQuotesApiError=apiError
  }

};
