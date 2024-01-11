import { type getMoviesType } from "@/types/fetchMoviesTypes";

export async function getMovies(page: number) {
  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjIyNjY4MGI1MDA1OWQ4Yzg5YjIyYmUyMzRiMzg1OCIsInN1YiI6IjY1OWU4YjNmOTFiNTMwMDFmZGYxY2FmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFJut9PmKJZ1uBlZSch2NAb1FEGh54bUqkVHzXajbjc",
    },
  };
  const moviesFetch = await fetch(url, options);
  const moviesJson: getMoviesType = await moviesFetch.json();

  return moviesJson;
}