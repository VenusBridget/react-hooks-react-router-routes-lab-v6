import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const API = "http://localhost:4000/movies"

function MovieCard() {
  const [movieItem, setMovieItem] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(setMovieItem)
  }, [])

  return (
    <article>
      {/* <h2>{title}</h2> */}
      {/* What should go here? */}
      <div>
        {movieItem.map((movie) => (
          <div className='card' key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>Movie</Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default MovieCard;