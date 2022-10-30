import React, { useState, lazy, Suspense } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Spin } from "antd";

const ReportFilter = lazy(() => import("./ReportFilter/ReportFilter"));

const App = () => {
  let ModalWidth = '80%'
  let ModalHeight = '300px'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOK = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <>
        <Button onClick={showModal}>{isModalOpen ? "Close" : "Open"}</Button>
        <Suspense fallback={<Spin />}>
          <Modal
            title="Report Filter"
            open={isModalOpen}
            onOk={handleOK}
            onCancel={handleCancel}
            centered
            width={ModalWidth}
            style={{height:{ModalHeight}}}
          >
            <ReportFilter />
          </Modal>
        </Suspense>
      </>
    </div>
  );
};

export default App;
