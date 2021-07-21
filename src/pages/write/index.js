import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Form, Input, Button, Upload } from "antd";

import * as api from "../../api";

import { Container } from "./styles";

const initialState = {
  title: "",
  desc: "",
  photo: "",
};

const Write = () => {
  const [formData, setFormData] = useState(initialState);
  // const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUplaod = (e) => {
    console.log(e, "--e-");
    setFormData({ ...formData, photo: e.target.files[0] });
    const params = new FormData();
    params.append("name", e.target.files[0].name);
    params.append("file", e.target.files[0]);
    api.upload(params);
  };

  return (
    <Container>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item label="标题">
          <Input name="title" value={formData.title} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="描述">
          <Input name="desc" value={formData.desc} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="图片">
          {/* <Upload
            name="file"
            action="http://localhost:5000/api/upload"
            onChange={handleUplaod}
          >
            <Button>upload</Button>
          </Upload> */}
          <input type="file" onChange={handleUplaod} />
        </Form.Item>
        <Form.Item>
          <img
            style={{ width: "100%", height: "400px" }}
            src={"http://localhost:5000/images/" + formData.photo.name}
            alt=""
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {"确定1"}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Write;
