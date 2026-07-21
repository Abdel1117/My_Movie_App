import { getMovieByPath } from "@/app/utils/movieClient";
import styles from "./SearchResult.module.scss";
import { MediaCard } from "@/app/components/media-card/MediaCard";
type QueryParam = { key: string; value: string | undefined };

export const SearchResults = async ({ searchParams, genreId, locale }) => {
  const searchParamsValue = await searchParams;
  const params: QueryParam[] = [
    { key: "sort_by", value: searchParamsValue.sort_by },
    { key: "release_date.gte", value: searchParamsValue["release_date.gte"] },
    { key: "release_date.lte", value: searchParamsValue["release_date.lte"] },
    { key: "with_genres", value: genreId },
  ];

  const { results } = await getMovieByPath("/discover/movie", params, locale);

  return (
    <div className={styles.results}>
      {results
        ?.filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
    </div>
  );
};
