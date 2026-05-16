import React from "react";
import { useThemeStore } from "./customHooks/ThemeStore";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      style={{
        padding: 20,
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: 8,
      }}
    >
      <h2>Theme Switcher</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
