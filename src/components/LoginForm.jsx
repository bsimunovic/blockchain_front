import { Button, Card, Form, Input } from "antd";
import { axiosInstance } from "../helpers/";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const from = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    axiosInstance
      .post("auth/authenticate", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      });
  };
  return (
    <div className="form">
      <Card className="transaction-card" style={{ width: "900px", height: "100%" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
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
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
