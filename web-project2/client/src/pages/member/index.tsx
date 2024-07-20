import {
  Button,
  Table,
  TableColumnsType,
  Popconfirm,
  Tooltip,
  message,
  Image,
} from "antd";
import CustomLayout from "../../components/CustomLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

type MemberData = {
  _id: string;
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  password: string;
  age: number;
  avatar: string;
};

function MemberPage() {
  const [data, setData] = useState<MemberData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res: { data: MemberData[] } = await axios.get(
          "http://localhost:3000/members/getmembers"
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDelete = async (_id: string) => {
    try {
      await axios.get(`http://localhost:3000/members/deleteMember/${_id}`);
      const res = await axios.get("http://localhost:3000/members/getmembers");
      setData(res.data);
    } catch (error) {
      message.error("خطا در انجام عملیات!");
    }
  };

  const columns: TableColumnsType<MemberData> = [
    {
      title: "شناسه",
      render: (_, record) => record._id,
    },
    {
      title: "آواتار",
      render: (_, record) => (
        <Image
          width={100}
          height={100}
          src={`http://localhost:3000/file/${record.avatar}`}
        />
      ),
    },
    {
      title: "نام",
      render: (_, record) => record.firstname,
    },
    {
      title: "نام خانوادگی",
      render: (_, record) => record.lastname,
    },
    {
      title: "موبایل",
      render: (_, record) => record.mobile,
    },
    {
      title: "ایمیل",
      render: (_, record) => record.email,
    },
    {
      title: "سن",
      render: (_, record) => record.age,
    },
    {
      title: "ویرایش",
      render: (_, record) => (
        <Link to={`/members/${record._id}`} style={{ textDecoration: "none" }}>
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
    <CustomLayout active="members">
      <Button type="primary">
        <Link to="/members/new" style={{ textDecoration: "none" }}>
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

export default MemberPage;
