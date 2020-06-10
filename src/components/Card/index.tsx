import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";
import { DARK } from "../../constants/theme";

const Card: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>
        Hello World!
        {title === DARK ? (
          <span role="img" aria-label="ovelha">
            {" "}
            🌚
          </span>
        ) : (
          <span role="img" aria-label="ovelha">
            {" "}
            🌝
          </span>
        )}
      </h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Container>
  );
};

export default Card;
