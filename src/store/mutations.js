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
  }
  // 

};
