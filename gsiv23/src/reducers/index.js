import { combineReducers } from "redux";

import multipleMoviesReducer from "./MovieListReducer";
import singleMovieReducer from './SingleMovieReducer'


export default combineReducers({

  movies: multipleMoviesReducer,
  movie:singleMovieReducer

});