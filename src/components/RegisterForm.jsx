import { Form, Input } from "antd";

export const RegisterForm = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Confirm Password" />
        </Form.Item>
      </Form>
    </div>
  );
};
