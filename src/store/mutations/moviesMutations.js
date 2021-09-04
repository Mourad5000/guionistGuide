export const SET_MOVIES_LOADING = (state) => {
  state.moviesLoader = true;
};

export const SET_MOVIES = (state, movies) => {
  state.movies = movies;
  state.moviesLoader = false;
};

export const SET_MOVIES_ERROR = (state, apiError) => {
  state.moviesLoader = false;
  state.APIerror=apiError;
};
