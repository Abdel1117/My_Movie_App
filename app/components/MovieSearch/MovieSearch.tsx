"use client";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { MovieSearchResults } from "./MovieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";
import { useDictionary } from "@/app/hooks/useDictionary";

export const MovieSearch = () => {
  const i18n = useDictionary();
  const [moviesResults, setMoviesResults] = useState<any[]>([]);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const updateMovieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    console.log(results);
    setMoviesResults(results.filter((movie: any) => movie.backdrop_path));
  };

  const debouncedSearch = useDebouncedCallback((value: string) => {
    updateMovieSearch(value);
  }, 500);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder={i18n.movieSearch.placeholder}
        onChange={(e) => debouncedSearch(e.target.value)}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {moviesResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={moviesResults} />
      )}
    </div>
  );
};
