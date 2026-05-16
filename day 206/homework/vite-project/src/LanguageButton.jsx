import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const LanguageButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => setLanguage("ENG")}>English</button>
      <button onClick={() => setLanguage("GEO")}>ქართული</button>
    </div>
  );
};

export default LanguageButton;
