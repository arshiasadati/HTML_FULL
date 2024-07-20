import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type LoginData = {
  title?: string;
};

function LoginPage() {
  const [form] = useForm();
  const navagate = useNavigate();

  const handleFinish = async (values: LoginData) => {
    try {
      const resLogin = await axios.post(
        "http://localhost:3000/members/login",
        values
      );
      console.log(resLogin.data);
      if (resLogin.data) {
        navagate("/profile");
      }
      message.error("نام کاربری یا کلمه عبور صحیح نمی باشد!");
    } catch (error) {
      message.error("خطا در انجام عملیات!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(-135deg, #08203e, #557c93)",
      }}
    >
      <Card style={{ width: "400px" }}>
        <div
          data-aos={"fade-down"}
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img width="200px" src="../public/login-logo.png" alt="logo" />
        </div>
        <Form
          id="unit-form"
          form={form}
          layout="vertical"
          preserve={false}
          name="basic"
          scrollToFirstError
          onFinish={handleFinish}
        >
          <Form.Item label="ایمیل" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="رمز عبور" name="password">
            <Input.Password
              placeholder="رمز عبور"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              ورود
            </Button>
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              ثبت نام
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
