import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  -webkit-box-shadow: ${(props) =>
    `0px 0px 16px -8px rgba(${props.theme.appTextColorRgb}, 0.68)`};
  box-shadow: ${(props) =>
    `0px 0px 16px -8px rgba(${props.theme.appTextColorRgb}, 0.68)`};
  margin: 15px 0;
  padding: 20px;
  width: 100%;
`;
export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTopLeft = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  background: ${(props) => props.theme.appDefaultBoxColor};
`;

export const PostDate = styled.div`
  font-size: 12px;
`;

export const PostTopRight = styled.div``;

export const PostCenter = styled.div`
  margin: 10px 0;

`;

export const PostText = styled.div`
  letter-spacing: 1px;
  line-height: 1.3;
`;

export const PostImg = styled.div`
  margin-top: 10px;
  width: 100%;
  /* max-height: 500px; */
  height: min(285px, max(175px, 41vw));
  background: ${(props) => props.theme.appBorderColor};
  object-fit: contain;

  &:hover {
    opacity: 0.7;
  }
`;

export const PostBottom = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%; /** Mobile */
  @media (min-width: 330px) {
    width: 90%;
  }
  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: ${(props) => props.theme.appTextColor};
  > span {
    margin-right: 5px;
  }
  svg {
    fill: ${(props) => props.theme.appTextColor};
  }
`;
