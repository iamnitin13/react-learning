import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme() {
    console.log("Hi");
  },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("forest");
        break;
      default:
        setTheme("light");
        break;
    }
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
