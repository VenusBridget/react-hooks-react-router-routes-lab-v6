import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const API = "http://localhost:4000/directors"

function Directors() {
  const[directorItem, setdirectorItem] = useState([]);

  useEffect(() => {fetch(API)
  .then((res) => res.json())
  .then(setdirectorItem)
}, [])

  const directorItems = directorItem.map((director) => (
    <div key={director.id}>
    <h2>{director.name}</h2>
    <ul>
      {director.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </div>
  ))
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
        <h1> Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {directorItems}
      </main>
    </>
  );
};

export default Directors;
