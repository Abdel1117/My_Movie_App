import SearchSideBar from "@/app/components/search-sidebar/searchSidebare";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/app/utils/movieClient";

export const MovieSearchLayout = async ({ children, params }) => {
  const { local } = await params;
  const genres = await getMovieByPath("/genre/movie/list", [], local);

  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
