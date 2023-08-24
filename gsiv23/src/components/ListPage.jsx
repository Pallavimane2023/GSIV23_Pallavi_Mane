import { useEffect, useState } from "react";
import { TMDB_API_KEY } from "../apis/key";
import { fetchMovies } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Button, Grid } from "@material-ui/core";
import Navbar from "./Navbar";

const ListPage = () => {
  const [movieCardData, setMovieCardData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(1);

  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

  useEffect(() => {
    dispatch(fetchMovies(fetchUrl));
  }, [fetchMovies, fetchUrl, page]);

  const renderedList = useSelector((state) => {
    return state.movies.movies;
  });

  const incrementCount = () => {
    setPage(page + 1);
  };

  const decrementCount = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setMovieCardData(renderedList);
  }, [renderedList, page]);

  const cardList = flag ? filteredResults : movieCardData;

  const renderMovieCards = (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="space-evenly"
      style={{ minHeight: "80vh", marginTop: "10px" }}
    >
      {cardList.map((movie) => (
        <Grid key={movie.id} item xs={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <Navbar
        setMovieCardData={setMovieCardData}
        movieCardData={movieCardData}
        setFlag={setFlag}
        setFilteredResults={setFilteredResults}
      />
      {renderMovieCards}
      {!flag ? (
        <div style={{ float: "right", margin: "10px" }}>
          <Button
            disabled={page === 1 ? true : false}
            color="primary"
            variant="contained"
            onClick={decrementCount}
          >
            <span aria-hidden="true">«</span> Prev
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px" }}
            onClick={incrementCount}
          >
            Next <span aria-hidden="true">»</span>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ListPage;
