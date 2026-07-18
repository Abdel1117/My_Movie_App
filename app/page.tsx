import { Genres } from "./components/genres/Genres";
import { MediaCard } from "./components/media-card/MediaCard";
import { Popular } from "./components/popular/Popular";
import styles from "./page.module.css";

export const revalidate = 86400; // 24 hours

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
