import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { KEY_LOCAL_STORAGE_THEME } from "../constants/localStorage";
import { LIGHT } from "../constants/theme";

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    KEY_LOCAL_STORAGE_THEME,
    light
  );

  function toggleTheme() {
    setTheme(theme.title === LIGHT ? dark : light);
  }
  console.log("##", theme);
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
