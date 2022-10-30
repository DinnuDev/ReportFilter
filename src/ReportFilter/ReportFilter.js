/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Report.css";
import { Card, Row, Col, Button } from "antd";

const ReportFilter = () => {
  return (
    <div className="container site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <h4>Select User</h4>
        </Col>
        <Col span={8}>
          <Button type="link">Edit List</Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Agency Executive List" bordered={true}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Branch Manager List" bordered={true}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReportFilter;
