
import {
    
    FETCH_MOVIES_INITIATED,
    FETCH_MOVIES_FAILED,
    FETCH_MOVIES_SUCCEEDED,
    FETCH_MOVIE_INITIATED,
    FETCH_MOVIE_SUCCEEDED,
    FETCH_MOVIE_FAILED,
    MOVIE_CLICKED
    
  } from "./type";
  
  import { TMDB_API_KEY } from "../apis/key";
  
  
  import tmdb from "../apis/tmdb";
  import {useNavigate } from "react-router-dom";


  
  export const handleMovieClick = (id, path) => async (dispatch) => {
    dispatch({ type: MOVIE_CLICKED, payload: id });
    const navigate = useNavigate();
    let navigationPath = `${path}/${id}/details`;
  
    navigate(navigationPath);
  };
  

  export const fetchMovies = (url) => async (dispatch) => {

  
    dispatch({ type: FETCH_MOVIES_INITIATED });
  
    try {
      const response = await tmdb.get(url);
  
      await Promise.all(
        response.data.results.map(async (movie) => {
            
          const responseDetails = await tmdb.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&&language=en-US`
          );
  
          movie.details = responseDetails.data;
         
        })
      );
  
      dispatch({ type: FETCH_MOVIES_SUCCEEDED, payload: response?.data?.results });
      
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILED });
      console.error("%cData Fetching Error:", "font-size: 18px", error);
    }
  };

  export const fetchMovie = (url) => async (dispatch) => {
    dispatch({ type: FETCH_MOVIE_INITIATED });
  
    try {
      const response = await tmdb.get(url);
  
      dispatch({ type: FETCH_MOVIE_SUCCEEDED, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_MOVIE_FAILED });
      console.error("%cData Fetching Error:", "font-size: 18px", error);
    }
  };

  
  
  
  
  
 