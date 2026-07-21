"use client";
import { availableLocales } from "@/app/utils/i18n";
import styles from "./LangageSelector.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCurrentLanguage } from "@/app/hooks/useCurrentLangage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function LangageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentLanguage = useCurrentLanguage();
  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);
  return (
    <div className={`${styles.selector} ${isOpen ? styles.enabled : ""}`}>
      <p onClick={() => setIsOpen((current) => !current)}>
        {currentLanguage}
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </p>
      <ul className={`${styles.ul}`}>
        {availableLocales
          .filter((locale) => locale !== currentLanguage)
          .map((locale) => (
            <li key={locale}>
              <Link href={`/${locale}`}>{locale}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
