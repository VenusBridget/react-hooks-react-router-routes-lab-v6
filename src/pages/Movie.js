import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const API = "http://localhost:4000/movies"

function Movie() {
  const { id } = useParams();
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(data => {
      const foundMovie = (data.find(m => m.id === parseInt(id)))
      setmovie(foundMovie)
    })
  }, [])

  return (
    <>
    <div className= 'card'>
      <header>
      {/* What component should go here? */}
      <NavBar/>
      <h1>{movie.title}</h1>
      </header>
      <main>
        {/* Movie info here! */}
        <p>Runtime: {movie.time} min.</p>
        <span>
        {/* {movie.genres.map((genre, index) => ( */}
          {/* <ul key={index}> */}
          <li>{movie.genres}</li>
          {/* </ul> */}
        {/* ))} */}
      
        </span>
      </main>
      </div>
    </>
  );
};

export default Movie;
