import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { AppContext } from "../Store/AppContext";
import "./Report.css";
import { Modal, Row, Col, Button, Card, Collapse, Checkbox } from "antd";
import { mockData } from "./Mock-Data";
// import { CarFilled } from "@ant-design/icons";
let ModalWidth = "80%";
let ModalHeight = "300px";
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;

const FilterModal = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [listData, setListData] = useState([]);
  console.log(appState);
  ////////////////////////////////////////////
  //CheckBox Functions
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const handleChkBox = (e) => {
    
    // console.log(e.target.name);
    setCheckedList(e);
    setIndeterminate(!!e.length && e.length < listData.length);
    setCheckAll(e.length === listData.length);
  };
  const onCheckAllChange = (e) => {
    // debugger
    setCheckedList(e.target.checked ? listData.map(nme => nme.name) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    console.log(e)
  };

  //Modal Box Functions
  const [isModalOpen, setIsModalOpen] = useState(false);
  ///////////////////////////////////////////////////
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  ///////////////////////////////////////////////////
  //Get data on Edit List Function
  const getData = async () => {
    const response = _.cloneDeep(mockData);
    const {
      result: { region },
    } = response;
    appDispatch({ type: "LIST_DATA", payload: region });
    setListData(region);
  };
  ///////////////////////////////////////////////////
  //Collapse Functions
  const onCollapseChange = (key) => {
    console.log(key);
  };

  ///////////////////////////////////////////////////
  useEffect(() => {
    console.log("This is in USEEffect:", appState);
  }, [appState, listData]);
  ///////////////////////////////////////////////////
  return (
    <div className="container site-card-wrapper">
      <Button onClick={showModal}>{isModalOpen ? "Close" : "Open"}</Button>
      <Modal
        title="Report Filter"
        open={isModalOpen}
        centered
        width={ModalWidth}
        style={{ height: { ModalHeight } }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={16}>
          <Col span={8}>
            <h4>Select User</h4>
          </Col>
          <Col span={16} align="right">
            <Button type="link" onClick={getData}>
              Edit List
            </Button>
          </Col>
        </Row>
        {/* Body Section */}
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Agency Executive List" bordered={true}>
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                <Panel header='Select All'></Panel>
                
              </Checkbox>
              {listData.map((el) => {
                return (
                  <>
                    <Collapse key={el.id} expandIconPosition="end">
                      <Panel header={el.name}>
                        {el.ae.length > 0
                          ? el.ae.map((ele) => {
                              return (
                                <Checkbox
                                  key={ele.id}
                                  name={ele.name}
                                  onChange={handleChkBox}
                                >
                                  <Panel header={ele.name}></Panel>
                                </Checkbox>
                              );
                            })
                          : ""}
                      </Panel>
                    </Collapse>
                  </>
                );
              })}
            </Card>
          </Col>
          <Col span={16}>
            <Card title="Branch Manager List" bordered={true}></Card>
          </Col>
        </Row>

        {/* <Row gutter={16}>
          <Col span={8}>
            <Card title="Agency Executive List" bordered={true}>
              {listData.map((el) => {
                return (
                  <Collapse key={el.id} expandIconPosition="end">
                      <Panel header={el.name}>
                        {el.ae.length > 0
                          ? el.ae.map((ele) => {
                              return (
                                  <Panel header={ele.name} key={el.id}></Panel>
                              );
                            })
                          : ""}
                      </Panel>
                  </Collapse>
                );
              })}
            </Card>
          </Col>
          <Col span={16}>
            <Card title="Branch Manager List" bordered={true}></Card>
          </Col>
        </Row> */}
      </Modal>
    </div>
  );
};

export default FilterModal;
