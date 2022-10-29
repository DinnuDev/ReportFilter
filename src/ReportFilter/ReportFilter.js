/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Report.css";

const ReportFilter = () => {
  return (
    <div className="container">
      <div className="head">
        <label>Report Filter</label>
        <a href="#123" className="close"></a>
      </div>
      <div className="mid-section">
        <label>Select User</label>
        <a href="">Edit List</a>
      </div>
      <div className="content">
        <section className="ae-list">
          <div>
            <label>Agency Executive List</label>
          </div>
        </section>
        <section className="bm-list">
          <div>
            <label>Branch Manager List</label>
          </div>
        </section>
      </div>
      <footer className="footer">footer Content</footer>
    </div>
  );
};

export default ReportFilter;
