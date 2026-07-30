import React from "react";
import { getDictionary } from "@/app/utils/dictionaries";

export const SeriesPage = async ({ params }) => {
  const { locale } = await params;
  const i18n = await getDictionary(locale);
  return <div>{i18n.series.comingSoon}</div>;
};

export default SeriesPage;
