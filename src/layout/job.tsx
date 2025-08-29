import React from "react";
import { Outlet } from "react-router-dom";

const Job: React.FC = () => {
  return (
    <div>
      <h1>Job Openings</h1>
      <p>List of Job openings in Nigeria</p>
      <Outlet />
    </div>
  );
};

export default Job;
