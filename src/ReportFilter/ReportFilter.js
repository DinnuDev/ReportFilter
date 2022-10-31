/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, lazy, Suspense, useEffect, useContext } from "react";
import "./Report.css";
import { Card, Row, Col, Button, Spin, Modal, List, Checkbox } from "antd";
import { mockData } from "./Mock-Data";
import _ from "lodash";
import { AppContext } from "../Store/AppContext";
const CheckboxGroup = Checkbox.Group;

const EditList = lazy(() => import("./EditList"));

const ReportFilter = (props) => {
  const [filterDetails, setFilterDetails] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { appState, appDispatch } = useContext(AppContext);
  const [aeListData, setAeListData] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  useEffect(() => {
    setIsModalOpen(props.modelOpen);
  }, [props]);
  const handleOK = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let ModalWidth = "80%";
  let ModalHeight = "300px";

  const getData = async () => {
    const response = _.cloneDeep(mockData);
    const {
      result: { region },
    } = response;
    appDispatch({ type: "LIST_DATA", payload: region });
    let tmpArr = [];
    for (let vals of region) {
      tmpArr.push(vals.name);
    }
    setAeListData(tmpArr);
    console.log("Inside Get Data:", aeListData);
    // console.log("List Data is:", appState.listData);
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
                <Card title="Agency Executive List" bordered={true}>
                  <Suspense fallback={<Spin />}>
                    <Checkbox indeterminate={indeterminate}>
                      Select All
                    </Checkbox>
                    <List
                      size="large"
                      dataSource={aeListData}
                      renderItem={(item) => (
                        <>
                          <List.Item>
                            <CheckboxGroup options={[item]} />
                          </List.Item>
                        </>
                      )}
                    />
                  </Suspense>
                </Card>
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
      <Suspense fallback={<Spin />}>
        <EditList />
      </Suspense>
    </div>
  );
};

export default ReportFilter;
