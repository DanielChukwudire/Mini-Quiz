import React from "react";
import Navbar from "../Navbar/navbar";
import { Outlet, useLocation } from "react-router-dom";

const Rootlayout: React.FC = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/vertical-login";
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div className="w-[100%] h-[80vh] flex justify-center items-center text-2xl font-bold">
        <Outlet />
      </div>
    </div>
  );
};

export default Rootlayout;
