import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../AdminComponents/Sidebar";
import Header from "../AdminComponents/Header";
import OrdersList from "../AdminComponents/OrdersList";

const { Content } = Layout;

const AdminDashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);

  return (
    <Layout className="min-h-screen">
      <Sidebar open={open} />
      <Layout className={`transition-all ${open ? "ml-60" : "ml-20"}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <OrdersList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;