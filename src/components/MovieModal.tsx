import { type MovieInfoProps } from "@/types/movieInfoProps";

import { MovieGenre } from "./MovieGenre";

interface MovieModalProps extends MovieInfoProps {
  isVisible: boolean;
  handleVisible: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({
  title,
  score,
  overview,
  movieGenre,
  poster,
  isVisible,
  handleVisible,
}) => {
  return (
    <div
      className={`fixed w-full h-screen bg-zinc-950/80 -mt-20 flex justify-center items-center z-40 ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="w-72 mx-auto h-[90vh] p-5 bg-slate-950 rounded-lg border-2 border-solid border-rose-700 min-[530px]:w-96 md:w-[600px] md:p-10">
        <div className="grid grid-cols-2">
          <picture>
            <img
              className="rounded-xl w-36 min-[530px]:w-44"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`}
              alt={`Poster of ${title} movie`}
            />
          </picture>

          <div className="grid grid-rows-2">
            <svg
              className="justify-self-end hover:cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={handleVisible}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>

            <div>
              <p className="text-center mx-5 font-bold text-2xl text-yellow-500 min-[530px]:text-3xl">
                {score}
              </p>
              <p className="text-center font-bold text-lg text-yellow-500">
                Score
              </p>
            </div>
          </div>
        </div>

        <h3 className="my-3 text-2xl font-bold text-rose-500 truncate min-[530px]:my-8 min-[530px]:text-3xl">
          {title}
        </h3>

        <div className="flex flex-wrap my-5">
          {movieGenre.map((genre) => (
            <MovieGenre key={genre} genreId={genre} />
          ))}
        </div>

        <p className="text-sm h-44 overflow-y-auto md:text-lg">{overview}</p>
      </div>
    </div>
  );
};
