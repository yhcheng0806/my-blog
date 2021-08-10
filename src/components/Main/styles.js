import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: min(601px, 100%); */
`;

export const Theme = styled.div`
  span {
    font-size: 28px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const Pages = styled.div`
  height: 100%;
  overflow: auto;
  &.phone {
    padding-bottom: 48px;
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: ${(props) => props.theme.appBgColor};
  border-top: 1px solid ${(props) => props.theme.appBorderColor};
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;
export const Status = styled.div`
  span {
    font-size: 24px;
    cursor: pointer;
    svg {
      fill: ${(props) => props.theme.appTextColor};
    }
  }
  &:hover,
  &.active {
    svg {
      fill: ${(props) => props.theme.appThemeColor};
    }
  }
`;
