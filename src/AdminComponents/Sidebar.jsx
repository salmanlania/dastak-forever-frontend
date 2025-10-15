import React from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ open }) => {
  return (
    <Sider width={240} className={`transition-all ${open ? "block" : "hidden"}`}>
      <Menu mode="inline" defaultSelectedKeys={["1"]} theme="light">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Customers
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
