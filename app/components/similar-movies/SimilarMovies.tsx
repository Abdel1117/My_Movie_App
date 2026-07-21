import React from "react";
import { getMovieByPath } from "@/app/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import { MediaCard } from "../media-card/MediaCard";

interface SimilarMoviesProps {
  movieId: string;
  locale: string;
}

export const SimilarMovies = async ({
  movieId,
  locale,
}: SimilarMoviesProps) => {
  const { results } = await getMovieByPath(
    `/movie/${movieId}/similar`,
    [],
    locale,
  );

  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results?.slice(0, 6)?.map((movie: { id: number }) => (
          <MediaCard media={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
