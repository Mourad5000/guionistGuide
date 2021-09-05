export default {
  SET_MOVIES_LOADING(state) {
    state.moviesLoader = true;
  },

  SET_MOVIES(state, movies) {
    state.movies = movies;
    state.moviesLoader = false;
  },

  SET_MOVIES_ERROR(state, apiError) {
    state.moviesLoader = false;
    state.APIerror = apiError;
  }
};
