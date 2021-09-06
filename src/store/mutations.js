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

  LOAD_CHARACTER_LOADING(state){
    state.characterQuotesLoader = true;
  },

  LOAD_CHARACTER_QUOTES(state, characterQuotes){
    state.characterQuotesLoader = false;
    state.characterQuotes=characterQuotes;
  },

  LOAD_CHARACTER_QUOTES_ERROR(state, apiError){
    state.characterQuotesLoader = false;
    state.characterQuotesApiError=apiError
  },
  // 

  LOAD_MOVIES(state){
    state.moviesLoader = true;
  }

  // hacer las mutations
  // pintar en el state todas las cosas que pasan y en el getter filtrar las quotes con las pelis que hay 
  // y generar un nuevo objeto en el state que sera del que bebera la tabla
};
