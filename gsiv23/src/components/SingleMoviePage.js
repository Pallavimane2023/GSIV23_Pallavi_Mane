import { useEffect } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { fetchMovie } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Container } from "@material-ui/core";
import { Rating } from "@mui/material";
import Navbar from "./Navbar";

const SingleMoviePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id]);

  const data = useSelector((state) => {
    return {
      movie: state.movie.movie,
      credits: state.movie.credits,
      isLoading: state.movie.isLoading,
      isError: state.movie.isError,
    };
  });

  const movieInfo = data?.movie;

  const director = data?.credits?.crew?.filter((director) => {
    return director.job === "Director";
  });

  const directorName = director?.map((name) => {
    return name.name;
  });

  const casts = data?.credits?.cast?.map((castActor) => {
    return castActor.name;
  });

  const convertRuntime = (num) => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h:" + rminutes + "m";
  };

  return (
    <div>
      <Navbar />
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid grey",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <Card>
            <CardMedia
              sx={{ height: 340 }}
              image={`https://image.tmdb.org/t/p/w780/${movieInfo?.poster_path}`}
              title="green iguana"
            />
          </Card>
        </div>
        <div style={{ margin: "10px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{ height: 300 }}>
              <Typography gutterBottom variant="h5">
                Title: {movieInfo?.title}
              </Typography>
              <Typography gutterBottom variant="h5">
                <Rating
                  name="simple-controlled"
                  value={movieInfo?.vote_average}
                  max={10}
                />
                {movieInfo?.vote_average}
              </Typography>
              <Typography gutterBottom variant="h7">
                {movieInfo?.release_date +
                  " " +
                  "|" +
                  " " +
                  convertRuntime(movieInfo?.runtime) +
                  " " +
                  "|" +
                  " " +
                  directorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Casts:</b>
                <br />
                {casts[0] + "," + casts[1] + "..."}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Discription:</b>
                <br />
                {movieInfo?.overview.substring(0, 500)}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SingleMoviePage;
