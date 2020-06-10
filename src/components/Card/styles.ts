import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px;
  padding: 40px;
  background: ${(props) => props.theme.colors.background_secundary};
  border-radius: 10px;

  h1 {
    margin-bottom: 15px;
  }
`;
