import React from "react";
import { notFound } from "next/navigation";
import { getMovieByPath } from "@/app/utils/movieClient";
import MovieDetails from "@/app/components/movie-details/MovieDetails";
interface MovieIdPageProps {
  params: {
    id: string;
  };
}

export const dynamic = "force-static";
export const revalidate = 3600;

export const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const { id } = await params;
  console.log(id);
  const movie = await getMovieByPath(`/movie/${id}`);

  if (!movie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieIdPage;
