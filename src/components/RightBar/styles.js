import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 500px;

    /* width: min(399px, 100%); */
    background: ${(props) => props.theme.appBgColor};
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  background: ${(props) => props.theme.appBgColor};
  position: sticky;
  top: 0;
  z-index: 2;

  max-height: 57px;

  > span {
    position: absolute;
    left: 34px;
    top: 29px;
    font-size: 20px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  background: ${(props) => props.theme.appSearch};
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;

  &::placeholder {
    color: ${(props) => props.theme.appDefaultBoxColor};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.appThemeColor};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 24px 200px;
  margin-top: 3px;
  overflow: auto;
  div {
    height: 300px;
    border-radius: 4px;
    background: ${(props) => props.theme.appBorderColor};
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      opacity: 0.7;
    }
  }
  > div + div {
    margin-top: 15px;
  }
`;
