import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import Button from "@mui/material/Button";

import { SearchOutlined } from "@material-ui/icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MovieSearch(props) {
  const { setMovieCardData, movieCardData, setFilteredResults, setFlag } =
    props;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchInput.length == 0) {
      setFlag(false);
      setMovieCardData(movieCardData);
    }
  }, [searchInput]);

  //search
  const searchItems = () => {
    setFlag(true);
    if (searchInput !== "") {
      const filteredData = movieCardData.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setMovieCardData(movieCardData);

      setFlag(false);
    }
  };

  return (
    <Box
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      sx={{ flexGrow: 1 }}
    >
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchOutlined />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={searchInput}
            onChange={handleChange}
          />
        </Search>
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="inherit"
          type="submit"
          onClick={searchItems}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
