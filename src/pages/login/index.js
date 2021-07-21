import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { login } from "../../actions/user";

import { Container } from "./styles";

const initilstae = {
  account: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initilstae);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    console.log(formData, "-formData");
    dispatch(login(formData, history));
  };
  const toPage = () => {
    console.log("----d--");
    history.push("/register");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item label="账号">
          <Input
            name="account"
            value={formData.account}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input.Password
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {"登录"}
          </Button>
          <Button type="text" onClick={toPage}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
