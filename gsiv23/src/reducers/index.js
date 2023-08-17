import { combineReducers } from "redux";

import multipleMoviesReducer from "./MovieListReducer";


export default combineReducers({

  movies: multipleMoviesReducer,

});