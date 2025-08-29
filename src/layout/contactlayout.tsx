import React from "react";
import Contact from "../page/Contact";
import { Outlet } from "react-router-dom";

const Contactlayout: React.FC = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default Contactlayout;
