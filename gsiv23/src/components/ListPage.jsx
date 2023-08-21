import { useEffect } from "react";
import { TMDB_API_KEY } from "../apis/key";
import { fetchMovies } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Grid } from "@material-ui/core";

const ListPage = () => {
  const dispatch = useDispatch();

  const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&&append_to_response=credits`;

  useEffect(() => {
    dispatch(fetchMovies(fetchUrl));
  }, [fetchMovies, fetchUrl]);

  const renderedList = useSelector((state) => {
    return state.movies.movies;
  });

  const renderMovieCards = (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="space-evenly"
      style={{ minHeight: "80vh", marginTop: "10px" }}
    >
      {renderedList.map((movie) => (
        <Grid item xs={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );

  return <div> {renderMovieCards}</div>;
};

export default ListPage;
