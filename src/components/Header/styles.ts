import styled from "styled-components";

export const Container = styled.div`
  min-height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-weight: bold;
  font-size: 1.5rem;

  margin-bottom: 50px;
`;
