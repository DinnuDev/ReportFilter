/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, lazy, Suspense, useEffect } from "react";
import "./Report.css";
import { Card, Row, Col, Button, Spin, Modal } from "antd";
import { mockData } from "./Mock-Data";
import _ from "lodash";

const EditList = lazy(() => import("./EditList"));

const ReportFilter = (props) => {
  const [editlist, setEditList] = useState(false);
  const [filterDetails, setFilterDetails] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("Props in Report Filter:", props);
  useEffect(() => {
    setIsModalOpen(props.modelOpen);
  }, [props]);
  const handleOK = () => {
    setIsModalOpen(false);
    setEditList(!editlist);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditList(!editlist);
  };
  let ModalWidth = "80%";
  let ModalHeight = "300px";

  const getData = async () => {
    setEditList(!editlist);
    const response = _.cloneDeep(mockData);
    const {
      result: { region },
    } = response;
    console.log(region);
    setFilterDetails(!filterDetails);
  };
  return (
    <div className="container site-card-wrapper">
      {filterDetails ? (
        <Modal
          title="Report Filter"
          open={isModalOpen}
          onOk={handleOK}
          onCancel={handleCancel}
          centered
          width={ModalWidth}
          style={{ height: { ModalHeight } }}
        >
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
            <>
              <Col span={8}>
                <Card title="Agency Executive List" bordered={true}></Card>
              </Col>
              <Col span={16}>
                <Card title="Branch Manager List" bordered={true}></Card>
              </Col>
            </>
          </Row>
        </Modal>
      ) : (
        ""
      )}

      {/* {editlist ? (
        <>
          <Suspense fallback={<Spin />}>
            <EditList />
          </Suspense>
        </>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ReportFilter;
