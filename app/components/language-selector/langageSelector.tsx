import React from "react";
import { availableLocales } from "@/app/utils/i18n";
export default function langageSelector() {
  return (
    <div>
      <select name="language" id="language">
        {availableLocales.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
}
