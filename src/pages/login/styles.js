import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    padding: 40px 20px;
  }
`;

export const LoginLeft = styled.div`
  flex: 1;
  padding: 0 40px;
  > strong {
    font-size: 38px;
    font-weight: 800;
  }
  > span {
    font-size: 14px;
    padding: 20px 0;
    letter-spacing: 4px;
  }
  @media (max-width: 1000px) {
    flex: 2;
    padding: 0;
    > strong {
      font-size: 38px;
    }
    > span {
      font-size: 14px;
      padding: 10px 0;
      letter-spacing: 4px;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    > strong {
      font-size: 16px;
    }
    > span {
      font-size: 12px;
    }
  }
`;

export const LoginRight = styled.div`
  flex: 1;
  background: ${(props) => props.theme.appThemeColor};
  border-radius: 2px;

  -webkit-box-shadow: ${(props) =>
    `0px 0px 16px -8px rgba(${props.theme.appTextColorRgb}, 0.68)`};
  box-shadow: ${(props) =>
    `0px 0px 16px -8px rgba(${props.theme.appTextColorRgb}, 0.68)`};
  @media (max-width: 1000px) {
    flex: 10;
  }
`;

export const Form = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px;
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const FormItem = styled.div`
  width: min(100%, 500px);
  font-size: 18px;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  span {
    color: #fff;
    svg {
      fill: #fff;
    }
  }
  strong {
    color: #fff;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: #fff;
  border-bottom: 1px solid #fff;
  &::placeholder {
    color: #fff;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Tip = styled.div`
  color: #fff;
  padding: 0 0 20px;
  width: 100%;
`;

export const Button = styled.div`
  position: relative;
  width: min(100%, 500px);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 26px;
    svg {
      fill: #fff;
    }
  }
  &.register {
    justify-content: flex-end;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
  &.empty {
  }
  &.login {
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #fff;
      top: 0;
      transition: 0.2s;
    }
    &::after {
      left: 0;
    }
    &::before {
      right: 0;
    }
    &:hover {
      &::before,
      &::after {
        width: 50%;
        height: 100%;
        opacity: 0;
        transition-delay: 0.5s;
      }
      > .bg {
        height: 0;
        transition-delay: 0.2s;
      }
      span {
        color: #fff;
        transition-delay: 0.2s;
      }
    }
    span {
      position: relative;
      z-index: 2;
      color: ${(props) => props.theme.appThemeColor};
      font-size: 20px;
      letter-spacing: 4px;
    }
    > .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #fff;
      z-index: 1;
      transition: 0.2s;
    }
  }
  @media (max-width: 500px) {
    height: 40px;
    font-size: 12px;
    &.login {
      span {
        font-size: 14px;
      }
    }
  }
`;

export const Forgot = styled.div`
  width: min(100%, 500px);
  margin: 40px 0 0;
  font-size: 12px;
  color: #fff;
  text-align: right;
`;
