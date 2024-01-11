import { genreList } from "@/utils/genres";

interface MovieGenreProps {
  genreId: number;
}

export const MovieGenre: React.FC<MovieGenreProps> = ({ genreId }) => {
  return (
    <span className="bg-yellow-500 text-slate-900 p-1 rounded-xl text-xs font-semibold m-1">
      {genreList.map((genre) => {
        if (genre.id === genreId) return genre.name;
      })}
    </span>
  );
};
