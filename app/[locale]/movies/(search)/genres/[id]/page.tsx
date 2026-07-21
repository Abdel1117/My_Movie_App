import { SearchResults } from "../../SearchResults";

type GenrePageProps = {
  params: {
    id: string;
    locale: string;
  };
  searchParams: any;
};

export default async function GenrePage({
  params,
  searchParams,
}: GenrePageProps) {
  const { id } = await params;
  const { locale } = await params;
  const searchParamsValue = await searchParams;
  return (
    <SearchResults
      searchParams={searchParamsValue}
      genreId={id}
      locale={locale}
    />
  );
}
