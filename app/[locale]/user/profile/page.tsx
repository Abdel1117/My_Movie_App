import LogoutButton from "@/app/components/logout-button/LogoutButton";
import { MediaCard } from "@/app/components/media-card/MediaCard";
import { getHydratedMovies } from "@/app/utils/movieClient";
import { prisma } from "@/app/utils/prisma";
import { getServerSession } from "next-auth";
import styles from "./page.module.scss";

export default async function page({ params }) {
  const { user: userSession } = await getServerSession();
  const { locale } = await params;
  const { MovieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      MovieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    MovieLikes?.map((movie) => movie.movieId),
  );
  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <h1>Liste des films aimés</h1>
        <LogoutButton />
      </div>
      <section className={styles.list}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MediaCard key={movie.id} media={movie} locale={locale} />
          ))
        ) : (
          <h2>Aucun Favoris</h2>
        )}
      </section>
    </div>
  );
}
