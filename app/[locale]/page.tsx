import { Genres } from "../components/genres/Genres";
import { Popular } from "../components/popular/Popular";
import styles from "./page.module.css";

export const revalidate = 86400; // 24 hours

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
