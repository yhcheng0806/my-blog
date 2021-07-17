import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid ${(props) => props.theme.t_outline};
    border-right: 1px solid ${(props) => props.theme.t_outline};
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.t_appBgColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 8px 13px 9px 13px;
  border-bottom: 1px solid ${props => props.theme.t_outline};

  > button {
    padding: 8px;
    border-radius: 50%;

    &:hover {
      /* background: var(--twitter-dark-hover); */
    }
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 22px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const Theme = styled.div`
  span {
    font-size: 28px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const Pages = styled.div`
  // display: flex;
  // flex-direction: column;

  // max-height: 100%;
  // overflow-y: auto;

  // scrollbar-width: none; /** Firefox */
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: ${props => props.theme.t_appBgColor};
  border-top:1px solid ${props => props.theme.t_outline};
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
  
`;
export const Status = styled.div`
  span {
    font-size:24px;
    cursor: pointer;
    svg {
      fill:${props => props.theme.t_textColor}
    }
  }
  &:hover,
    &.active {
      svg {
        fill:${props => props.theme.t_twitter}
      }
    }
`;
