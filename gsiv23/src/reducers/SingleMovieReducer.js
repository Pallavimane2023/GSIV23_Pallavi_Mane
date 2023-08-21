import {
    FETCH_MOVIE_INITIATED,
    FETCH_MOVIE_FAILED,
    FETCH_MOVIE_SUCCEEDED,
  } from "../actions/type";
  
  const INITIAL_STATE = {
    movie: [],
    credits: [],
    isError: false,
    isLoading: false
  };
  
  export default  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_MOVIE_INITIATED:
        return {
          ...state,
          isError: false,
          isLoading: true
        };
  
      case FETCH_MOVIE_FAILED:
        return {
          ...state,
          isError: true,
          isLoading: false
        };
  
      case FETCH_MOVIE_SUCCEEDED:      
      return {
          ...state,
          movie: {...action.payload},
          credits: { ...action.payload.credits },         
          images: { ...action.payload.images },
          isError: false,
          isLoading: false
        };
      default:
        return state;
    }
  };