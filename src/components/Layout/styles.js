import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.appBgColor};
`;

export const Wrapper = styled.div`
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  &.full {
    max-width: 100%;
  }
`;
