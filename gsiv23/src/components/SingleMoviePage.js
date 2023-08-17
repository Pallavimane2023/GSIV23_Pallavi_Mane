import { useEffect, useState } from "react";

import { TMDB_API_KEY } from "../apis/key";
import { fetchMovie } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const SingleMoviePage = () => {
  const data = useSelector((state) => {
    return state;
  });

  let urlMovieId = "55";
  const dispatch = useDispatch();
  const fetchUrl = `https://api.themoviedb.org/3/movie/${urlMovieId}?api_key=${TMDB_API_KEY}&append_to_response=credits`;

  useEffect(() => {
    dispatch(fetchMovie(fetchUrl));
  }, [fetchMovie, fetchUrl]);

  console.log("hhhh---", data);
  return <div> SinglePge</div>;
};

export default SingleMoviePage;
