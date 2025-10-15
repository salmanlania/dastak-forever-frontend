import React from "react";
import { Layout, Avatar, Tooltip, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = ({ toggleSidebar }) => {
  return (
    <Header className="flex justify-between items-center bg-white border-b px-6 py-3">
      <div className="flex items-center gap-3">
        <Button
          icon={<MenuOutlined />}
          onClick={toggleSidebar}
          type="text"
          className="text-gray-700"
        />
        <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
      </div>
      <Tooltip title="Admin Profile">
        <Avatar
          alt="Admin"
          src="/admin.jpg"
          className="cursor-pointer ring-2 ring-blue-100"
        />
      </Tooltip>
    </Header>
  );
};

export default HeaderComponent;