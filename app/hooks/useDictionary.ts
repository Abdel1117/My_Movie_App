"use client";
import en from "../dictionaries/en.json";
import fr from "../dictionaries/fr.json";
import { useCurrentLanguage } from "./useCurrentLangage";

const dictionaries: Record<string, typeof fr> = { en, fr };

export const useDictionary = () => {
  const locale = useCurrentLanguage() as string;
  return dictionaries[locale] ?? dictionaries.fr;
};
