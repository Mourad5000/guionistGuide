import axios from "axios";
import APIconstants from "../constants/APIconstants";
import headers from "../constants/headers";

// los commits no deben ser magic strings
export function getMovies() {
  return async ({ commit }) => {
    try {
        commit("SET_MOVIES_LOADING")
      const endPoint = `${APIconstants.API_URL}${APIconstants.REQUEST_CHARACTERS}`;
      const { data } = await axios.get(endPoint, headers);
      commit("SET_MOVIES", data);
      console.log(data);
    } catch (error) {
      console.log(error);
      commit("SET_MOVIES_ERROR", error);
    }
  };
}
