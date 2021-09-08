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

  LOAD_CHARACTER_QUOTES_BY_NAME(state, characterQuotesWName){
    state.characterQuotesLoader = false;
    state.characterQuotesWMovieId=characterQuotesWName;
  },

  LOAD_CHARACTER_QUOTES_ERROR(state, apiError){
    state.characterQuotesLoader = false;
    state.characterQuotesApiError=apiError
  },
  // 

  BACK_END_REQUEST(state,itemAndRequest){
    console.log(itemAndRequest);
    state.backEndRequests.push(itemAndRequest)
  }


};
