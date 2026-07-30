import React, { Suspense } from "react";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import { MovieCredits } from "../movie-credits/MovieCredits";
import { getDictionary } from "../../utils/dictionaries";

export default async function MovieDetails({ movie, locale }) {
  const i18n = await getDictionary(locale);
  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";
  return (
    <div className={styles.details}>
      <div className={styles.background}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original/${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <div className={styles.content}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />

        <div className={styles.description}>
          <h1>
            {movie.title}{" "}
            <span className={styles.releaseDate}>
              ({new Date(movie.release_date).toLocaleDateString(dateLocale)})
            </span>
          </h1>
          <p className={styles.production}>
            {i18n.movieDetails.production}
            <span>
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </span>
          </p>

          <h2>{i18n.movieDetails.synopsis}</h2>
          <p className={styles.overview}>{movie.overview}</p>

          <div className={styles.credits}>
            <Suspense fallback={i18n.common.loading}>
              <MovieCredits movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
