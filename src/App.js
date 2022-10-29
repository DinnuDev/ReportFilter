import React, { useState } from "react";
import ReportFilter from "./ReportFilter/ReportFilter";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

const App = () => {
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
        {/* {modalState ? <ReportFilter /> : ""} */}

        <Modal
          title="Report Filter"
          open={isModalOpen}
          onOk={handleOK}
          onCancel={handleCancel}
        >
          <ReportFilter />
        </Modal>
      </>
    </div>
  );
};

export default App;
