import { SearchResults } from "../../SearchResults";

type GenrePageProps = {
  params: {
    id: string;
  };
  searchParams: any;
};

export default async function GenrePage({
  params,
  searchParams,
}: GenrePageProps) {
  const { id } = await params;
  const searchParamsValue = await searchParams;
  return <SearchResults searchParams={searchParamsValue} genreId={id} />;
}
