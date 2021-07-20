import React, { useState } from "react";
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

  const handleSubmit = () => {
    console.log(formData, "-");
    dispatch(login(formData));
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
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
