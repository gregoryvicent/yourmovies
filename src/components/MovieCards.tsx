import React, { useState } from "react";
import { MovieGenre } from "./MovieGenre";
import { MovieModal } from "./MovieModal";
import { type MovieInfoProps } from "@/types/movieInfoProps";

export const MovieCard: React.FC<MovieInfoProps> = ({
  title,
  score,
  overview,
  movieGenre,
  poster,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleModal = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <MovieModal
        title={title}
        score={score}
        overview={overview}
        movieGenre={movieGenre}
        poster={poster}
        isVisible={isVisible}
        handleVisible={handleVisibleModal}
      />
      <article
        className="relative flex items-end w-72 h-96 mx-5 my-10 border-2 border-solid border-rose-700 rounded-xl z-20 hover:cursor-pointer"
        onClick={handleVisibleModal}
      >
        <div className="p-5 w-72 absolute bg-gradient-to-t from-slate-950 to-slate-950/80 rounded-b-xl">
          <h3 className="mb-5 text-2xl font-bold text-rose-500 truncate">{title}</h3>

          <div>
            <div>
              <p className="text-center font-bold text-3xl text-yellow-500">
                {score}
              </p>
              <p className="text-center font-bold text-xl text-yellow-500">
                Score
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap">
            {movieGenre.map((genre) => (
              <MovieGenre key={genre} genreId={genre} />
            ))}
          </div>
        </div>

        <picture>
          <img
            className="rounded-xl w-72 h-96"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`}
            alt={`Poster of ${title} movie`}
          />
        </picture>
      </article>
    </>
  );
};
