import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  padding: 9px 19px 20px;
  height: 100vh;
  min-width:220px;
  /* overflow-y: auto; */
  /* border-right: 1px solid ${(props) => props.theme.appBorderColor}; */

  @media (max-width: 1280px) {
    min-width: 0;
  }

  @media (max-width: 500px) {
    width: 0;
    min-width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
  }
`;
export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:hover,
  &.active {
    cursor: pointer;
    > strong {
      color: ${(props) => props.theme.appThemeColor};
    }
    svg {
      fill: ${(props) => props.theme.appThemeColor};
    }
  }

  > strong {
    display: none;
  }
  > span {
    font-size: 26px;
  }

  @media (min-width: 1280px) {
    > strong {
      display: inline;
      margin-left: 19px;
      flex-shrink: 0;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;
`;

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
    color: ${(props) => props.theme.appTextColor};
    margin: 10px 0 0;
    cursor: pointer;
    &:hover {
      svg {
        fill: ${(props) => props.theme.appLikeColor};
      }
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    span {
      margin: 0 0 0 30px;
    }
  }
`;
export const Theme = styled.div`
  span {
    font-size: 28px;
    color: ${(props) => props.theme.textColor};
    &:hover {
      color: ${(props) => props.theme.textColor};
    }
  }
`;
