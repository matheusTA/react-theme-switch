import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";
import { DARK } from "../../constants/theme";
import useToggleTheme from "../../hooks/useToggleTheme";

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useToggleTheme();

  return (
    <Container>
      <p>
        React Switch Theme
        <span role="img" aria-label="ovelha">
          {" "}
          🌗
        </span>
      </p>

      <Switch
        onChange={toggleTheme}
        checked={title === DARK}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
