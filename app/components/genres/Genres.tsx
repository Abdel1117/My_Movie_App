import { getMovieByPath } from "@/app/utils/movieClient";
import Link from "next/link";
import styles from "./Genres.module.scss";
import { getDictionary } from "../../utils/dictionaries";

interface genderProps {
  locale: string;
}
export const Genres = async ({ locale }: genderProps) => {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  const i18n = await getDictionary(locale);
  return (
    <div>
      <h2>{i18n.genres.title}</h2>
      <div className={styles.container}>
        {genres?.map((genre: { id: number; name: string }) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/${locale}/movies/genres/${genre.id}`}>
              {genre.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
