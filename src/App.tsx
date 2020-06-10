import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Header from "./components/Header";

import { LIGHT } from "./constants/theme";
import { THEME } from "./constants/localStorage";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(THEME, light);

  const toggleTheme = () => {
    setTheme(theme.title === LIGHT ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
