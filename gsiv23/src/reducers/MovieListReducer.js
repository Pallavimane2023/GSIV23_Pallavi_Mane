import {
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED,
} from "../actions/type";

const INITIAL_STATE = {
  movies: [],
  isError: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => { 
  switch (action.type) {
    case FETCH_MOVIES_INITIATED:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case FETCH_MOVIES_SUCCEEDED:
      return {
        ...state,
        movies: action.payload,
        isError: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
