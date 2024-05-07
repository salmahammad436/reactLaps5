import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/language';
import moviesReducer, { fetchMovies } from './slices/MoviesThunk';

const store = configureStore({
  reducer: {
    language: languageReducer,
    movies: moviesReducer,
  },
});

store.dispatch(fetchMovies());

export default store;