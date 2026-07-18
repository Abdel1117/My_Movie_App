"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import styles from "./searchSideBare.module.scss";
import Form from "./form/Form";

const SearchSideBar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      return "Films";
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
      <h1> Tous les {title} </h1>
      <Form />
    </div>
  );
};

export default SearchSideBar;
