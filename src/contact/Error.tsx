import React from "react";
import { useNavigate } from "react-router-dom";

const Pagenotfound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100px] h-[30px] bg-[violet] text-white">
        <button className="" onClick={() => navigate("/")}>
          Pagenotfound
        </button>
      </div>
    </>
  );
};

export default Pagenotfound;
