import React from "react";
// import Logo from "../assets/logo-dark.png";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[70px] bg-[white] flex justify-between items-center font-stretch-normal shadow-md">
      {/* <img className="w-[150px] h-[30px] m-2 object-fill" src={Logo} alt="" /> */}
      <ul className="flex text-[#6483B8] cursor-pointer w-[400px] justify-between">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-[#6483B8]"
          }
        >
          {" "}
          <li>Home</li>{" "}
        </NavLink>
        <NavLink
          to={"/product"}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-[#6483B8]"
          }
        >
          <li>Product</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-[#6483B8]"
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-[#6483B8]"
          }
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to={"/job"}
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-[#6483B8]"
          }
        >
          <li>jobseek</li>
        </NavLink>
      </ul>
      <div className="">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-[#6483B8] w-[100px] h-[30px] text-white m-2 p-0.5 items-center rounded-2xl"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#6483B8] w-[100px] h-[30px] text-white m-2 p-0.5 items-center rounded-2xl"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
