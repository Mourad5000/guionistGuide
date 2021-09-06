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
      commit(actionTypes.LOAD_CHARACTERS_ERROR, errorMessages.LOAD_API_ERROR_MESSAGE('characters'));
    }
  },

  getCharacterQuotes: async function({ commit }, characterId) {
    try {
      commit(actionTypes.LOAD_CHARACTER_LOADING, true);
      const endPoint = `${APIconstants.API_URL}${APIconstants.LOAD_CHARACTER_QUOTES(characterId)}`;

      const { data } = await axios.get(endPoint, {
        headers: headers
      });
      commit(actionTypes.LOAD_CHARACTER_QUOTES,data.docs);
      // hacer la llamada a la api de movies aqui asi utilizamos menos recursos
      dispatchEvent('getMovies');
    } catch (error) {
      commit(
        actionTypes.LOAD_CHARACTER_QUOTES_ERROR,
        errorMessages.LOAD_API_ERROR_MESSAGE('character quotes')
      );
    }
  },

  getMovies:async function ({commit}){
    try {
      commit(actionTypes.LOAD_MOVIES_LOADER, true);
      const endPoint = `${APIconstants.API_URL}${MOVIES}`;

      const {data} = await axios.get(endPoint, {
        headers: headers
      })

      commit(actionTypes.LOAD_MOVIES,data.docs);
      
    } catch (error) {
      commit(
        actionTypes.LOAD_MOVIES_ERROR,
        errorMessages.LOAD_CHARACTERS_ERROR_MESSAGE('movies')
      );
    }
  }

};
