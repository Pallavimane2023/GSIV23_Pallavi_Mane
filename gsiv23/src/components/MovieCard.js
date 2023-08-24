import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchMovie } from "../actions";
import { useNavigate } from "react-router-dom";
import { Card, } from "@material-ui/core";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

const MovieCard = (props) => {
  const { movie } = props;
 
  const navigate = useNavigate();
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movie.id));
  }, []);

  const handleClick = () => {
    navigate(`/singlemoviepage/${movie.id}`);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick} key={movie.id}>
     
               
         
        <CardMedia
          sx={{ height: 400 }}
          image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          title="green iguana"
        > 
        <Rating
        name="simple-controlled"
        value={movie?.vote_average}
        max={10}
      ></Rating>
      {"("+movie?.vote_average+")"}
      </CardMedia>
      
        <CardContent>
          <Typography gutterBottom variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview.substring(0, 80)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieCard;
