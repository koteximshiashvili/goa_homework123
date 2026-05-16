import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

import ThemeButton from "./ThemeButton";
import LanguageButtons from "./LanguageButton";
import UserButton from "./UserButton";
import AddToCart from "./AddToCart";
import Cart from "./Cart";
import AuthButtons from "./AuthButtons";

const Everything = () => {
  const { language } = useContext(LanguageContext);

  const greetings = { ENG: "Hello", GEO: "გამარჯობა" };

  return (
    <div>
      <ThemeButton />
      <div>
        <LanguageButtons />
        <h1>{greetings[language]}</h1>
      </div>

      <div>
        <UserButton />
      </div>

      <div>
        <AddToCart />
        <Cart />
      </div>

      <div>
        <AuthButtons />
      </div>
    </div>
  );
};

export default Everything;