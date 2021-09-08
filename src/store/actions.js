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
  getCharacters: async function({ commit }) {
    try {
      commit(actionTypes.CHARACTERS_LOADING, true);
      const endPoint = `${APIconstants.API_URL}${APIconstants.REQUEST_CHARACTERS}`;
      const { data } = await axios.get(endPoint, {
        headers: headers
      });
      commit(actionTypes.LOAD_CHARACTERS, data.docs);
    } catch (error) {
      commit(actionTypes.LOAD_CHARACTERS_ERROR, errorMessages.LOAD_API_ERROR_MESSAGE("characters"));
    }
  },

  getCharacterQuotes: async function({ commit }, characterId) {
    try {
      commit(actionTypes.LOAD_CHARACTER_LOADING, true);
      const getCharacterQuotesEndPoint = `${
        APIconstants.API_URL
      }${APIconstants.LOAD_CHARACTER_QUOTES(characterId)}`;

      const getQuotes = axios.get(getCharacterQuotesEndPoint, {
        headers: headers
      });

      const getMoviesEndPoint = `${APIconstants.API_URL}${APIconstants.MOVIES}`;
      const getMovies = axios.get(getMoviesEndPoint, {
        headers: headers
      });

      const resolvedData = await Promise.all([getQuotes, getMovies]);

      const quotes = resolvedData[0].data.docs;
      const movies = resolvedData[1].data.docs;

      const quotesArray = [];
      quotes.forEach(quote => {
        movies.forEach(movie => {
          if (movie._id === quote.movie) {
            quotesArray.push({ ...quote, movieName: movie.name });
          }
        });
      });
      commit(actionTypes.LOAD_CHARACTER_QUOTES_BY_NAME, quotesArray)
    } catch (error) {
      commit(
        actionTypes.LOAD_CHARACTER_QUOTES_ERROR,
        errorMessages.LOAD_API_ERROR_MESSAGE("character quotes")
      );
    }
  }
};
