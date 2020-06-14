import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Card from "./components/Card";

import useToggleTheme from "./hooks/useToggleTheme";

function App() {
  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
