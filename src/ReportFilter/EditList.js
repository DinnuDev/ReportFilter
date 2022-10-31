import React, {useContext} from "react";
import { AppContext } from "../Store/AppContext";
import { Card, Row, Col, Button, Spin, Modal } from "antd";

const EditList = () => {
  const {appState, appDispatch} = useContext(AppContext)
  return (
    <>
      {console.log('Edit List Page:', appState)}
      <Modal
          title="Report Filter"
          centered
        >
          <Row gutter={16}>
            <Col span={8}>
              <h4>Select User</h4>
            </Col>
            <Col span={8}>
              <Button type="link">
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
    </>
  );
};

export default EditList;
