import { Button, Card, Form, Input } from "antd";
import { useState } from "react";
import { axiosInstance } from "../helpers";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const payload = { username: values.username, password: values.password };
    axiosInstance
      .post("/auth/register", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <Card className="transaction-card" style={{ width: "500px" }}>
        <h2>Register</h2>
        <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {" "}
            Register{" "}
          </Button>
        </Form>
      </Card>
    </div>
  );
};
