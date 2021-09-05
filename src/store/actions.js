import axios from "axios";
import APIconstants from "../constants/APIconstants";
import actionTypes from "../constants/actionTypes";
import errorMessages from "../constants/errorMessages";

const headers = {
  Accept: "application/json",
  Authorization: "Bearer xvi06TocPJvBmrQC4yZv"
};

// los commits no deben ser magic strings
export default {
  getCharactersAction: async function({ commit }) {
    try {
      commit(actionTypes.CHARACTERS_LOADING, true);
      const endPoint = `${APIconstants.API_URL}${APIconstants.REQUEST_CHARACTERS}`;
      const { data } = await axios.get(endPoint, {
        headers: headers
      });
      commit(actionTypes.LOAD_CHARACTERS, data.docs);
    } catch (error) {
      commit(actionTypes.LOAD_CHARACTERS_ERROR, errorMessages.LOAD_CHARACTERS_ERROR_MESSAGE);
    }
  },

  getCharacterQuotes: async function({ commit }, characterId, characterName) {
    try {
      commit(actionTypes.SET_CHARACTER_LOADING, true);

      const endPoint = `${APIconstants.API_URL}${APIconstants.LOAD_CHARACTER_QUOTES(characterId)}`;
      const { data } = await axios.get(endPoint, {
        headers: headers
      });
      commit(actionTypes.LOAD_CHARACTERS_QUOTES, data.docs);
    } catch (error) {
      commit(
        actionTypes.LOAD_CHARACTERS_QUOTES_ERROR,
        errorMessages.LOAD_CHARACTER_QUOTES_ERROR_MESSAGE(characterName)
      );
    }
  }
};
