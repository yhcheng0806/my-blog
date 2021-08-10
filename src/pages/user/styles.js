import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
  background: ${(props) => props.theme.appThemeColor};
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid ${(props) => props.theme.appBgColor};
  background: ${(props) => props.theme.appDefaultBoxColor};
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > span {
    font-weight: bold;
    font-size: 19px;
    & + span {
      font-weight: normal;
      font-size: 15px;

      color: ${(props) => props.theme.appTextColor};
    }
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: ${(props) => props.theme.appThemeColor};
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: ${(props) => props.theme.appTextColor};
      > span {
        margin-right: 5px;
      }
      svg {
        fill: ${(props) => props.theme.appTextColor};
      }
    }
  }
`;

export const EditButton = styled.div``;

export const General = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${(props) => props.theme.appTextColor};

    & + span {
      margin-left: 20px;
    }
  }
  strong {
    padding-left: 8px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Tabs = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: ${(props) => props.theme.appThemeColor};
  border-bottom: 2px solid ${(props) => props.theme.appThemeColor};

  
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
`;
