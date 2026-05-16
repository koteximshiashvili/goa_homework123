import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Change Theme</button>
  );
};

export default ThemeButton;
