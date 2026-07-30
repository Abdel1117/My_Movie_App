"use client";
import { useDictionary } from "@/app/hooks/useDictionary";

export default function Error() {
  const i18n = useDictionary();
  return (
    <div className="error">
      <h1>{i18n.error.title}</h1>
      <p>{i18n.error.message}</p>
    </div>
  );
}
