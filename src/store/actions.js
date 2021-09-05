import axios from "axios";
import APIconstants from "../constants/APIconstants";

const headers={
  Accept: "application/json",
  Authorization: "Bearer xvi06TocPJvBmrQC4yZv"
}

// los commits no deben ser magic strings
export default {
  getMoviesAction: async function ({commit}) {
    try {
        commit("SET_MOVIES_LOADING",true);
        const endPoint = `${APIconstants.API_URL}${APIconstants.REQUEST_CHARACTERS}`;
        const { data } = await axios.get(endPoint, {
          headers: headers
        });
        console.log(data.docs);
        commit("SET_MOVIES", data.docs);
    } catch (error) {
        commit("SET_MOVIES_ERROR", 'There has been an error loading the characters');
    }
  }
}