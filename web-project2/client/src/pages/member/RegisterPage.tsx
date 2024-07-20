import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, InputNumber, message, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type RegisterData = {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  avatar: any;
  age: number;
};

function RegisterPage() {
  const [form] = useForm();
  const navagate = useNavigate();

  const handleFinish = async (values: RegisterData) => {
    try {
      const newValues = { ...values };
      newValues.avatar = values.avatar.fileList[0].name;

      const resRegister = await axios.post(
        "http://localhost:3000/members/register",
        newValues
      );

      if (resRegister.data) {
        navagate("/login");
      }
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
        <Form
          id="unit-form"
          form={form}
          layout="vertical"
          preserve={false}
          name="basic"
          scrollToFirstError
          onFinish={handleFinish}
        >
          <Form.Item label="نام" name="firstname">
            <Input />
          </Form.Item>
          <Form.Item label="نام خانوادگی" name="lastname">
            <Input />
          </Form.Item>
          <Form.Item label="موبایل" name="mobile">
            <Input />
          </Form.Item>
          <Form.Item label="سن" name="age">
            <InputNumber
              min={1}
              max={120}
              defaultValue={24}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item label="آواتار" name="avatar">
            <Upload
              name="fileName"
              action="http://localhost:3000/file/uploadFile"
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
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
              ثبت نام
            </Button>
          </Form.Item>

          <Link to="/login" style={{ textDecoration: "none" }}>
            بازگشت به صفحه ورود
          </Link>
        </Form>
      </Card>
    </div>
  );
}

export default RegisterPage;
