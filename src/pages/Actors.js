import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const API = 'http://localhost:4000/actors'

function Actors() {
  const [actorItem, setactorItem] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(setactorItem)
  }, [])

  const actorItems = actorItem.map((actor) => (
    <div key={actor.id}>
      <article>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </article>
    </div>
  ))
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actorItems}
      </main>
    </>
  );
};

export default Actors;
