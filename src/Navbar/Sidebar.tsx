import React from "react";
import VerticalNavbar from "./verticalbar";
import Dashboard from "../page/Dashboard";

const DashboardWithSidebar: React.FC = () => (
  <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
    <VerticalNavbar />
    <main className="flex-1 ml-64 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <Dashboard />
      </div>
    </main>
  </div>
);

export default DashboardWithSidebar;
