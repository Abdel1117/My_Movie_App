import React from "react";
import styles from "./MediaCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface MediaCardProps {
  media: any;
}

export const MediaCard = ({ media }: MediaCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt="Media title"
            fill
          />
        </div>

        <div className={styles.content}>
          <p className={styles.vote}>
            {String(media.vote_average).replace(".", ",").slice(0, 3)}
          </p>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
    </div>
  );
};
