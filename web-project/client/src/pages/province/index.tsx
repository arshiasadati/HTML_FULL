import {
  Button,
  Table,
  TableColumnsType,
  Popconfirm,
  Tooltip,
  message,
} from "antd";
import CustomLayout from "../../components/CustomLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

type ProvinceData = {
  _id: string;
  title: string;
};

function ProvincePage() {
  const [data, setData] = useState<ProvinceData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/provinces/getprovinces"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDelete = async (_id: string) => {
    try {
      await axios.post("http://localhost:3000/provinces/deleteProvince", {
        id: _id,
      });

      const res = await axios.get(
        "http://localhost:3000/provinces/getprovinces"
      );
      setData(res.data);
    } catch (error) {
      message.error("خطا در انجام عملیات!");
    }
  };

  const columns: TableColumnsType<ProvinceData> = [
    {
      title: "شناسه",
      render: (_, record) => record._id,
    },
    {
      title: "عنوان",
      render: (_, record) => record.title,
    },
    {
      title: "ویرایش",
      render: (_, record) => (
        <Link to={`/province/${record._id}`} style={{ textDecoration: "none" }}>
          ویرایش
        </Link>
      ),
    },
    {
      title: "حذف",
      render: (_, record) => (
        <Tooltip title="حذف">
          <Popconfirm
            title="حذف"
            description="آیا برای حذف اطمینان دارید؟"
            onConfirm={async () => {
              await handleDelete(record._id);
            }}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Tooltip>
      ),
    },
  ];
  return (
    <CustomLayout active="province">
      <Button type="primary">
        <Link to="/province/new" style={{ textDecoration: "none" }}>
          جدید
        </Link>
      </Button>
      <Table
        rowKey={"_id"}
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </CustomLayout>
  );
}

export default ProvincePage;
