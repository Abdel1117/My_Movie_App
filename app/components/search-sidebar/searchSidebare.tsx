"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import styles from "./searchSideBare.module.scss";
import Form from "./form/Form";
import { useDictionary } from "@/app/hooks/useDictionary";

const SearchSideBar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();
  const i18n = useDictionary();

  const getSideBarTitle = () => {
    if (!segment) {
      return i18n.searchSidebar.moviesDefault;
    }
    const genre = genres?.genres?.find(
      (genre: { id: number; name: string }) => genre.id === Number(id)
    );
    if (!genre) {
      notFound();
    }
    return genre.name;
  };

  const title: string | undefined = getSideBarTitle();
  return (
    <div className={styles.sidebar}>
      <h1>
        {" "}
        {i18n.searchSidebar.allPrefix} {title}{" "}
      </h1>
      <Form />
    </div>
  );
};

export default SearchSideBar;
