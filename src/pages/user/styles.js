import styled from "styled-components";

export const UserWrapper = styled.div``;

export const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > span {
    &.logoutIcon {
      position: absolute;
      bottom: max(-60px, -10vw);
      left: 60%;
      transform: translateX(-60%);
      z-index: 1;
      font-size: 24px;
      cursor: pointer;
      svg {
        fill: #000;
      }
    }
  }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: min(36vw, 300px);
  object-fit: cover;
`;

export const Avatar = styled.img`
  width: max(45px, min(140px, 22vw));
  height: max(45px, min(140px, 22vw));

  border: 4px solid ${(props) => props.theme.appBgColor};
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  &.default {
    border: 0;
  }
`;

export const FollowButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 8px 20px;
  background: ${(props) => props.theme.appThemeColor};
  color: #fff;
  &.active {
    background: #999;
  }
`;

export const UserInfo = styled.div`
  padding: min(12vw, 70px) 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Desc = styled.div`
  font-weight: 300;
`;

export const Detail = styled.div`
  div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.appTextColor};
    > span {
      margin-right: 5px;
    }
    svg {
      fill: ${(props) => props.theme.appTextColor};
    }
  }
`;

export const General = styled.div`
  margin-top: 20px;
  padding: 0 min(10vw, 70px);
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const CenterContainer = styled.div`
  padding: 10px;
`;
