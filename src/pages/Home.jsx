import React from "react";
import { MovieCard } from "../components";

export const Home = () => {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2014" },
    { id: 2, title: "John Wick: Chapter 2", release_date: "2017" },
    { id: 3, title: "John Wick: Chapter 3 – Parabellum", release_date: "2019" },
    { id: 4, title: "John Wick: Chapter 4", release_date: "2022" },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
