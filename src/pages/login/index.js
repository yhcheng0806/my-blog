import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Icon from "../../components/common/Icon";

import { login } from "../../actions/user";

import {
  Wrapper,
  FormContainer,
  Form,
  FormTitle,
  FormItem,
  Input,
  FormBtn,
  FormTip,
  PanelContainer,
  Panel,
} from "./styles";

const initLoginData = {
  type: "login",
  dataArr: [
    {
      name: "account",
      icon: "user",
    },
    {
      name: "password",
      icon: "password",
    },
  ],
  result: null,
};

const initRegisterData = {
  type: "register",
  dataArr: [
    {
      name: "account",
      icon: "account",
    },
    {
      name: "email",
      icon: "email1",
    },
    {
      name: "password",
      icon: "lock",
    },
  ],
  result: null,
};

const Login = () => {
  const [formData, setFormData] = useState(initLoginData);
  const { type, dataArr, result } = formData;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    console.log(result, "---result--");

    // dispatch(login(formData, history));
  };
  const toPage = () => {
    console.log("----d--");
    history.push("/register");
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      result: {
        ...formData.result,
        [e.target.name]: e.target.value,
      },
    });
  };
  const toggleType = (type) => {
    setFormData(type === "login" ? initLoginData : initRegisterData);
  };

  return (
    <Wrapper>
      <FormContainer className={type}>
        <Form className={type}>
          <FormTitle>blog</FormTitle>
          {dataArr.map(({ name, icon }, index) => (
            <FormItem key={index}>
              <Icon type={`icon-${icon}`} />
              <Input
                onChange={handleFormChange}
                placeholder={name}
                type={name}
                name={name}
              />
            </FormItem>
          ))}
          <FormBtn onClick={handleSubmit}>{type}</FormBtn>
          <FormTip
            onClick={() => toggleType(type === "login" ? "register" : "login")}
          >
            {type === "login" ? "创建新账号？" : "去登录"}
          </FormTip>
        </Form>
      </FormContainer>
      <PanelContainer>
        <Panel className={type}>{type}</Panel>
      </PanelContainer>
    </Wrapper>
  );
};

export default Login;
