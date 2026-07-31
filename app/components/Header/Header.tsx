import Link from "next/link";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { MovieSearch } from "../MovieSearch/MovieSearch";
import LangageSelector from "../../components/language-selector/LangageSelector";
import { getDictionary } from "../../utils/dictionaries";

interface HeaderProps {
  locale: string;
}

export const Header = async ({ locale }: HeaderProps) => {
  const i18n = await getDictionary(locale);
  return (
    <header className={`${styles.header} `}>
      <div className={styles.logo}>
        <Link href="/">
          <p>MyMovieApp</p>
        </Link>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>{i18n.header.series}</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>{i18n.header.movies}</Link>
            </li>
            <li>
              <Link href={`/${locale}/signup`}>{i18n.header.signup}</Link>
            </li>
          </ul>
        </nav>
      </div>

      <MovieSearch />

      <div>
        <Link href={`/${locale}/user/profile`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <LangageSelector />
    </header>
  );
};
