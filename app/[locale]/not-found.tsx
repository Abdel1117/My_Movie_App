import React from "react";
import { getDictionary } from "@/app/utils/dictionaries";
import { defaultLocale } from "@/app/utils/i18n";

export default async function NotFound() {
  const i18n = await getDictionary(defaultLocale);
  return (
    <div className="error">
      <h1>{i18n.notFound.title}</h1>
      <p>{i18n.notFound.message}</p>
    </div>
  );
}
