import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import Movie from "./Movie";
import MovieCard from "../components/MovieCard";


function Home() {
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
        <h1> Home Page </h1>
      </header>
       <main>
        {/* Info goes here! */}
        {/* <Movie/> */}
        <MovieCard/>
      </main>
    </>
  );
};

export default Home;
