import React from "react";
import { Card, Col, Row, Typography, Divider, Button, Image } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = {
    id,
    customer: "Aisha Khan",
    email: "aisha@example.com",
    phone: "+92 312 3456789",
    total: "Rs. 4500",
    payment: "Cash on Delivery",
    images: ["/abaya1.jpg", "/abaya2.jpg"],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <Card className="w-full max-w-4xl shadow-sm rounded-2xl border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <Typography.Title level={4}>Order #{order.id}</Typography.Title>
          <Button onClick={() => navigate("/admin/dashboard")}>Back to Orders</Button>
        </div>
        <Divider />

        <Row gutter={16}>
          <Col span={12}>
            <Typography.Text strong>Customer:</Typography.Text> {order.customer}
            <br />
            <Typography.Text strong>Email:</Typography.Text> {order.email}
            <br />
            <Typography.Text strong>Phone:</Typography.Text> {order.phone}
          </Col>
          <Col span={12}>
            <Typography.Text strong>Total:</Typography.Text> {order.total}
            <br />
            <Typography.Text strong>Payment:</Typography.Text> {order.payment}
          </Col>
        </Row>

        <Divider />
        <Typography.Title level={5}>Product Images</Typography.Title>
        <Row gutter={16}>
          {order.images.map((img, i) => (
            <Col span={8} key={i}>
              <Image src={img} alt="product" />
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default OrderDetail;