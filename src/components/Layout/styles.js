import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  border: 1px solid var(--twitter);
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
