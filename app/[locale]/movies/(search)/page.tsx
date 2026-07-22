import { SearchResults } from "./SearchResults";

export const MoviesPage = async ({ searchParams, params }) => {
  const { locale } = await params;

  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
