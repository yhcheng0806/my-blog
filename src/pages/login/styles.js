import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  border: 1px solid #000;
`;
export const FormContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 50%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    border-radius: 50%;
    transition: 1.8s ease-in-out;
    z-index: 2;
  }
  &.register {
    &::before {
      transform: translate(100%, -50%);
    }
  }
`;

export const Form = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  /* min-width: 340px; */

  /* transition: all 0.2s 0.7s; */
  /* overflow: hidden; */
  z-index: 1;
  &.login {
    left: 50%;
  }
  &.register {
    left: 0;
  }
`;

export const FormTitle = styled.div`
  font-weight: 500;
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const FormItem = styled.div`
  background-color: #f0f0f0;
  max-width: 380px;
  width: 100%;
  height: 55px;
  border-radius: 55px;
  margin: 10px 0;
  padding: 0 1rem;
  display: flex;

  align-items: center;
  > span {
    font-size: 24px;
    margin-right: 10px;
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  flex: 1;
`;

export const FormBtn = styled.button`
  width: 150px;
  background-color: #5995fd;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #4d84e2;
  }
`;

export const FormTip = styled.div`
  padding: 0.7rem 0;
  font-size: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #5995fd;
  }
`;

export const PanelContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Panel = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  transition: 1.8s ease-in-out;
  z-index: 4;
  &.login {
    right: 50%;
  }
  &.register {
    right: 0;
  }
`;
