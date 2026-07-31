import React from "react";
import styles from "./MediaCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../utils/dictionaries";
import { Like } from "./like/Like";

interface MediaCardProps {
  media: any;
  locale: string;
}

export const MediaCard = async ({ media, locale }: MediaCardProps) => {
  const i18n = await getDictionary(locale);
  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/movies/${media.id}`}>
        <div className={styles.image}>
          <Like movieId={media.id} />
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt="Media title"
            fill
          />
        </div>

        <div className={styles.content}>
          <p className={styles.vote}>
            {String(media.vote_average).replace(".", ",").slice(0, 3)}
          </p>
          <h3>{media.title}</h3>
          <p>
            {i18n.media.releasePrefix}{" "}
            {new Date(media.release_date).toLocaleDateString(dateLocale)}
          </p>
        </div>
      </Link>
    </div>
  );
};
