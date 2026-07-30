import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getMovieByPath } from "@/app/utils/movieClient";
import MovieDetails from "@/app/components/movie-details/MovieDetails";
import { SimilarMovies } from "@/app/components/similar-movies/SimilarMovies";
import { getDictionary } from "@/app/utils/dictionaries";
interface MovieIdPageProps {
  params: {
    id: string;
    locale: string;
  };
}

export const dynamic = "force-static";
export const revalidate = 3600;

export const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const { id } = await params;
  const { locale } = await params;
  const movie = await getMovieByPath(`/movie/${id}`, [], locale);
  const i18n = await getDictionary(locale);

  if (!movie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MovieDetails movie={movie} locale={locale} />
      <Suspense fallback={<p>{i18n.common.loading}</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
