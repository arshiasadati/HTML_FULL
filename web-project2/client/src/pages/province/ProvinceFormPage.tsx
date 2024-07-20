import { Form, Input, Button, message } from "antd";
import CustomLayout from "../../components/CustomLayout";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type ProvinceForm = {
  title?: string;
};

type ProvinceData = {
  _id: string;
  title: string;
};

function ProvinceFormPage() {
  const [form] = useForm();

  const { key } = useParams();
  const navagate = useNavigate();

  useEffect(() => {
    if (key !== "new") {
      (async () => {
        try {
          const res: { data: ProvinceData } = await axios.get(
            `http://localhost:3000/provinces/getprovince/${key}`
          );
          form.setFieldsValue({
            title: res.data.title,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [key]);

  const handleFinish = async (values: ProvinceForm) => {
    try {
      const newValues = { ...values, _id: key };
      if (key !== "new") {
        await axios.post(
          "http://localhost:3000/provinces/updateProvince",
          newValues
        );
      } else {
        await axios.post("http://localhost:3000/provinces/addProvince", values);
      }

      navagate("/provinces");
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
        <Form.Item label="عنوان" name="title">
          <Input />
        </Form.Item>

        <Form.Item>
          <button type="submit" className="btn btn-primary mb-2">
            ثبت
          </button>
        </Form.Item>
        <Form.Item>
          <Button type="default">
            <Link to="/provinces" style={{ textDecoration: "none" }}>
              بازگشت
            </Link>
          </Button>
        </Form.Item>
      </Form>
    </CustomLayout>
  );
}

export default ProvinceFormPage;
