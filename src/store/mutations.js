import actionTypes from "../constants/actionTypes";

export default {
  CHARACTERS_LOADING(state,bool) {
    state.charactersLoader = bool;
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

  LOAD_CHARACTER_LOADING(state,bool){
    state.characterQuotesLoader = bool;
  },

  LOAD_CHARACTER_QUOTES(state, characterQuotes){
    state.characterQuotesLoader = false;
    state.characterQuotesWMovieId=characterQuotes;
  },

  LOAD_CHARACTER_QUOTES_ERROR(state, apiError){
    state.characterQuotesLoader = false;
    state.characterQuotesApiError=apiError
  },
  // 

  LOAD_MOVIES_LOADER(state,bool){
    state.moviesLoader = bool;
  },

  LOAD_MOVIES(state, movies){
    state.moviesLoader = false;
    state.movies=movies;
  },

};
