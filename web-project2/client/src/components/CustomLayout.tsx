import React, { useState } from "react";
import {
  FlagOutlined,
  HomeOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  active: string;
};

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children, active }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[active]}
          items={[
            {
              key: "home",
              icon: <HomeOutlined />,
              label: (
                <Link to="/" style={{ textDecoration: "none" }}>
                  خانه
                </Link>
              ),
            },
            {
              key: "members",
              icon: <FlagOutlined />,
              label: (
                <Link to="/members" style={{ textDecoration: "none" }}>
                  کاربران
                </Link>
              ),
            },
            {
              key: "profile",
              icon: <UserOutlined />,
              label: (
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  پروفایل
                </Link>
              ),
            },
            {
              key: "provinces",
              icon: <FlagOutlined />,
              label: (
                <Link to="/provinces" style={{ textDecoration: "none" }}>
                  استان ها
                </Link>
              ),
            },
            {
              key: "login",
              icon: <LoginOutlined />,
              label: (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  ورود
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            borderRadius: 8,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
