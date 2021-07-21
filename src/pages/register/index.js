import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { register } from "../../actions/user";

import { Container } from "./styles";

const initilstae = {
  account: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initilstae);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    console.log(formData, "-formData");
    dispatch(register(formData, history));
  };
  const toPage = () => {
    console.log("----d--");
    history.push("/");
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
        <Form.Item label="邮箱">
          <Input name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {"注册"}
          </Button>
          <Button type="text" onClick={toPage}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Register;
