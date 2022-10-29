import React from "react";
import ReportFilter from "./ReportFilter/ReportFilter";

const App = () => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <div className="App">
      <>
        <button onClick={() => setModalState(!modalState)}>
          {modalState ? "Close" : "Open"}
        </button>
        {modalState ? <ReportFilter /> : ""}
      </>
    </div>
  );
};

export default App;
