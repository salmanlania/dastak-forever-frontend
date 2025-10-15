import React from "react";
import { Table, Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const orders = [
  { id: 1, customer: "Ayesha Khan", total: "₨4,500", status: "Pending", date: "Oct 15, 2025" },
  { id: 2, customer: "Sara Ali", total: "₨7,800", status: "Delivered", date: "Oct 12, 2025" },
];

const OrdersList = () => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#${text}`,
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Delivered" ? "green" : "gold"}>{status}</Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button icon={<EyeOutlined />} size="small" />
      ),
    },
  ];

  return <Table columns={columns} dataSource={orders} rowKey="id" />;
};

export default OrdersList;