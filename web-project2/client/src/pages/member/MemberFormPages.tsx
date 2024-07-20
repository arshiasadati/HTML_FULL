import { Form, Input, Button, message, Upload } from "antd";
import CustomLayout from "../../components/CustomLayout";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UploadOutlined,
} from "@ant-design/icons";

type MemberForm = {
  _id: string;
  title?: string;
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  age: number;
  avatar: any;
};

type MemberData = {
  _id: string;
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  age: number;
  avatar: any;
};

function MemberFormPage() {
  const [form] = useForm();

  const { key } = useParams();
  const navagate = useNavigate();

  useEffect(() => {
    if (key !== "new") {
      (async () => {
        try {
          const res: { data: MemberData } = await axios.get(
            `http://localhost:3000/members/getmember/${key}`
          );

          form.setFieldsValue({
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            mobile: res.data.mobile,
            email: res.data.email,
            password: res.data.password,
            age: res.data.age,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [key]);

  const handleFinish = async (values: MemberForm) => {
    try {
      const newValues = { ...values };
      if (newValues.avatar) {
        newValues.avatar = values.avatar.fileList[0].name;
      }
      if (key !== "new") {
        if (key) {
          newValues._id = key;
        }

        await axios.post(
          "http://localhost:3000/members/updateMember",
          newValues
        );
      } else {
        await axios.post("http://localhost:3000/members/addMember", values);
      }

      navagate("/members");
    } catch (error) {
      message.error("خطا در انجام عملیات!");
    }
  };

  return (
    <CustomLayout active="province">
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
        <Form.Item label="سن" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="آواتار" name="avatar">
          <Upload
            name="fileName"
            action="http://localhost:3000/file/uploadFile"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <button type="submit" className="btn btn-primary mb-2">
            ثبت
          </button>
        </Form.Item>
        <Form.Item>
          <Button type="default">
            <Link to="/members" style={{ textDecoration: "none" }}>
              بازگشت
            </Link>
          </Button>
        </Form.Item>
      </Form>
    </CustomLayout>
  );
}

export default MemberFormPage;
