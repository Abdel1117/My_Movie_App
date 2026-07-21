import React from "react";
import { SearchResults } from "./SearchResults";

export const MoviesPage = async ({ searchParams }) => {
  return <SearchResults searchParams={searchParams} />;
};

export default MoviesPage;
