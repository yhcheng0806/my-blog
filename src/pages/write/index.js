import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Icon from "../../components/common/Icon";
import * as api from "../../api/models/common";

import {
  Container,
  Form,
  FormItem,
  Label,
  Input,
  Textarea,
  Tools,
  Btn,
} from "./styles";

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

  const customRequest = async ({ file, filename, onError, onSuccess }) => {
    console.log(file, filename, "---e-----");
    const formData = new FormData();
    formData.append("name", file.name);
    formData.append(filename, file);
    setFormData({ ...formData, photo: file });

    try {
      const res = await api.upload(formData);
      onSuccess(res, file);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Container>
      <Form>
        <FormItem>
          <Label>标题</Label>
          <Input />
        </FormItem>
        <FormItem>
          <Tools>
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </Tools>
          <Btn>提交</Btn>
        </FormItem>
        <FormItem>
          <Textarea placeholder="记录生活" />
        </FormItem>
        <FormItem></FormItem>
      </Form>
      {/* <Form
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
          <Upload status="uploading" name="file" customRequest={customRequest}>
            <Button>upload</Button>
          </Upload>
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
            {"确定"}
          </Button>
        </Form.Item>
      </Form> */}
    </Container>
  );
};

export default Write;
