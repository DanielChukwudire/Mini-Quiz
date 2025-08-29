import React from "react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Contact Page</h1>
      <div className="flex gap-2">
        <button
          className="w-[100px] h-[30px] bg-[red]"
          onClick={() => navigate("info")}
        >
          info
        </button>
        <button
          className="w-[100px] h-[30px] bg-[blue]"
          onClick={() => navigate("form")}
        >
          form
        </button>
      </div>
    </>
  );
};

export default Contact;
