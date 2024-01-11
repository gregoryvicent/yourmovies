"use client";

import { useEffect, useState } from "react";
import { getMovies } from "@/utils/fetchMovies";
import { getMoviesType } from "@/types/fetchMoviesTypes";
import { MovieCard } from "./MovieCards";

export const MovieSection = () => {
  const [movies, setMovies] = useState<null | getMoviesType>(null);

  useEffect(() => {
    getMovies(1)
      .then((res) => setMovies(res))
      .catch((err) => setMovies(null));
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        {movies !== null
          ? movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                overview={movie.overview}
                poster={movie.poster_path}
                movieGenre={movie.genre_ids}
              />
            ))
          : "loading..."}
      </div>

    </section>
  );
};
