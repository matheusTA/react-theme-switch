import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Card from "./components/Card";

import { ThemeContextProvider } from "./context/toggleTheme";
import useToggleTheme from "./hooks/useToggleTheme";
import light from "./styles/themes/light";

function App() {
  const { theme } = useToggleTheme();

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme ? theme : light}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Card />
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
