import styled from "styled-components";

export const ShareWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  padding: 20px 0;
  z-index: 100;
  background: ${props=> props.theme.appBgColor};
`;

export const ShareTop = styled.div`
  display: flex;
  padding: 10px;
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
  margin: 16px 20px;
  border-bottom: 2px solid ${(props) => props.theme.appBorderColor};
`;

export const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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
