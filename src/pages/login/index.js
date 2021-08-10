import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { login } from "../../actions/user";

import {
  Wrapper,
  Container,
  LoginLeft,
  LoginRight,
  Form,
  FormItem,
  Input,
  Tip,
  Button,
  Forgot,
} from "./styles";

const defaultData = {
  dataArr: [
    {
      name: "account",
      icon: "account",
      placeholder: "输入你的用户名/邮箱",
      type: "text",
    },
    {
      name: "password",
      icon: "lock",
      placeholder: "输入密码",
      type: "password",
    },
  ],
  result: null,
};

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const { dataArr, result } = formData;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    if (loading) return;

    setLoading(true);
    dispatch(
      login(result, history, ({ error }) => {
        error && setError(error);
        setLoading(false);
      })
    );
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

  return (
    <Wrapper>
      <Container>
        <LoginLeft>
          {/* <strong>Qu Shi</strong> */}
          <strong>趣事</strong>
          <span>在社交网站上与朋友和你周围的世界联系。</span>
        </LoginLeft>
        <LoginRight>
          <Form>
            {dataArr.map(({ name, placeholder, type }) => (
              <FormItem key={name}>
                <Input
                  onChange={handleFormChange}
                  placeholder={placeholder}
                  value={result?.name}
                  type={type}
                  name={name}
                />
              </FormItem>
            ))}
            {error && <Tip>{error}</Tip>}
            <Button
              className={!loading ? "login" : "empty"}
              onClick={handleSubmit}
            >
              {!loading ? (
                <span>进入</span>
              ) : (
                <Spin className="loading" indicator={<LoadingOutlined />} />
              )}
              <div className="bg"></div>
            </Button>
            <Forgot>忘记密码？</Forgot>
            <Button
              className="register"
              onClick={() => history.push("/register")}
            >
              创建新的账号
            </Button>
          </Form>
        </LoginRight>
      </Container>
    </Wrapper>
  );
};

export default Login;
