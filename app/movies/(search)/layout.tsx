import SearchSideBar from "@/app/components/search-sidebar/searchSidebare";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/app/utils/movieClient";

export const MovieSearchLayout = async ({ children }) => {
  const genres = await getMovieByPath("/genre/movie/list");
  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
