import React from "react";
import { getMovieByPath } from "@/app/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import { MediaCard } from "../media-card/MediaCard";
export const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);

  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results?.slice(0, 6)?.map((movie) => (
          <MediaCard media={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
