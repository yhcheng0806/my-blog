import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { register } from "../../actions/user";

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
} from "./styles";

const defaultData = {
  dataArr: [
    {
      name: "username",
      icon: "account",
      placeholder: "添加用户名",
      type: "text",
    },
    {
      name: "email",
      icon: "email",
      placeholder: "添加邮箱",
      type: "email",
    },
    {
      name: "password",
      icon: "lock",
      placeholder: "输入密码",
      type: "password",
    },
    {
      name: "confirmPass",
      icon: "lock",
      placeholder: "确认密码",
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
      register(result, ({ path, error }) => {
        path && history.push(path);
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
                <span>注册</span>
              ) : (
                <Spin className="loading" indicator={<LoadingOutlined />} />
              )}
              <div className="bg"></div>
            </Button>
            <Button className="register" onClick={() => history.push("/login")}>
              登录你的账号
            </Button>
          </Form>
        </LoginRight>
      </Container>
    </Wrapper>
  );
};

export default Login;
