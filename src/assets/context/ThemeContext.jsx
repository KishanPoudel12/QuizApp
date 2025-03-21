import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext('dark');

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const prevTheme = localStorage.getItem("theme") || "dark";
    return prevTheme;
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
