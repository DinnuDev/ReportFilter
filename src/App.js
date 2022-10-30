import React, { useState, lazy, Suspense } from "react";
import "antd/dist/antd.css";
import { Button, Spin } from "antd";

const ReportFilter = lazy(() => import("./ReportFilter/ReportFilter"));

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Button onClick={showModal}>{isModalOpen ? "Close" : "Open"}</Button>
      <Suspense fallback={<Spin />}>
        <ReportFilter modelOpen={isModalOpen} />
      </Suspense>
    </>
  );
};

export default App;