import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background_primary};
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-family: sans-serif;
  }
`;
