/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./Report.css";
import { Card, Row, Col, Button } from "antd";
import { mockData } from "./Mock-Data";
import _ from 'lodash';

const ReportFilter = () => {
  const [aeListView, setAEListView] = useState(false);
  // const [aeList, setAEList] = useState([]);
  const getData = async () => {
    const response = _.cloneDeep(mockData);
    const {
      result: { region },
    } = response;
    console.log(region);
    console.log(region[0].name)
    let listObj = {}
    listObj.id = Math.random()
    listObj.name = region
    setAEListView(true);
  };
  return (
    <div className="container site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <h4>Select User</h4>
        </Col>
        <Col span={8}>
          <Button type="link" onClick={getData}>
            Edit List
          </Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Agency Executive List" bordered={true}>
            {aeListView === true ? (
              <div>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </div>
            ) : (
              ""
            )}
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
