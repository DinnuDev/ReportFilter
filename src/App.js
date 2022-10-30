import React, { useState, lazy, Suspense } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Spin } from "antd";

const ReportFilter = lazy(() => import("./ReportFilter/ReportFilter"));

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <>
        <Button onClick={showModal}>{isModalOpen ? "Close" : "Open"}</Button>
        <Suspense fallback={<Spin />}>
            <ReportFilter modelOpen={isModalOpen}/>
        </Suspense>
      </>
    </div>
  );
};

export default App;