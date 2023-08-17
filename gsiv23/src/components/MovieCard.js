import React from "react";

import { useDispatch } from "react-redux";
import { handleMovieClick } from "../actions";



const  MovieCard = (props) => {
    const {movie} =props;
   const dispatch = useDispatch();


 
  return (<button><a href="/singlemoviepage"> {movie.id}</a></button>);
  
};




export default MovieCard;







































