import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MovieSearch from "./MovieSearch";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

export default function Navbar(props) {
  const { setMovieCardData, movieCardData, setFilteredResults, setFlag } =
    props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ marginRight: "900px" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            MovieHouse
          </Typography>
          {movieCardData ? (
            <MovieSearch
              setMovieCardData={setMovieCardData}
              movieCardData={movieCardData}
              setFlag={setFlag}
              setFilteredResults={setFilteredResults}
            />
          ) : null}
          <IconButton>
            <Link to={"/"}>
              <HomeIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
