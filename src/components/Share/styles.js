import styled from "styled-components";

export const ShareWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  padding: 20px;
  z-index: 100;
  background: ${(props) => props.theme.appBgColor};
  * {
    /* border: 1px solid #000; */
  }
`;

export const ShareTop = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background: ${(props) => props.theme.appBorderColor};
`;

export const Textarea = styled.textarea`
  border: none;
  width: 100%;
  max-height: 200px;
  overflow: auto;
`;

export const ShareContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  border-bottom: 2px solid ${(props) => props.theme.appBorderColor};
`;

export const ImageContainer = styled.div`
  position: relative;
  .closeIcn {
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 1;
    font-size: 24px;
    cursor: pointer;
    svg {
      fill: #fff;
      opacity: 0.9;
    }
  }
`;

export const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  /* border: 1px solid #000; */
`;

export const ShareOptions = styled.div`
  display: flex;
`;

export const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const ShareButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background: ${(props) => props.theme.appThemeColor};
  font-weight: 500;
  cursor: pointer;
  color: white;
`;
