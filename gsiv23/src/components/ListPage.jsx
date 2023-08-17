import { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_API_KEY } from "../apis/key";
import {fetchMovies} from '../actions/index';
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";


const API_KEY = "7cd2bb9e820f444e0f979ebb3cdf0cc2";

// The goal of this component was to create a reusable custom hook to fetch data throughout the app.


const  ListPage = () => {
    const dispatch = useDispatch();
  
  const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&&append_to_response=credits`;

  useEffect(() => {
   dispatch( fetchMovies(fetchUrl));
   
  }, [fetchMovies, fetchUrl]);

 


 const renderedList = useSelector((state)=>{ return state.movies.movies})


 const renderMovieCards = renderedList.map((movie) => (
    <MovieCard key={movie.id} movie={movie}/>
  ));
  
  return (<div> {renderMovieCards}</div>);
  
};




export default ListPage;







































// import React,{useState,useEffect} from 'react';
// import axios from "axios";

// const ListPage=()=> {
    


//   const [APIData, setAPIData] = useState([]);
//   useEffect(() => {
//     //get method to display getAlbum data

//     const getAlbumData = async () => {
//       return await axios
//       .get(`https://api.themoviedb.org/3/movie/550?api_key=7cd2bb9e820f444e0f979ebb3cdf0cc2&append_to_response=credits`)
//         //.get(`https://api.themoviedb.org/3/discover/movie?api_key=7cd2bb9e820f444e0f979ebb3cdf0cc2`)
//         .then((response) => {
//           setAPIData(response.data);
//         })
//         .catch((err) => console.log(err));
//     };

//     getAlbumData();
//   }, []);

//   console.log("hi----",APIData)
//   return (
//     <div className="App">
//       hii
//     </div>
//   );
// }

// export default ListPage;
