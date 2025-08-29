import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  const stimulateLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-red-400 w-full flex h-20">
      <Link to="/">
        <h1>home</h1>
      </Link>
      <Link to="/about">
        <h1>about</h1>
      </Link>

      <Link to="/contact-us">
        <h1>contact</h1>
      </Link>

      <button className="bg-blue-500" onClick={handleLogin}>
        Login
      </button>
      <button className="bg-green-500" onClick={stimulateLogin}>
        {isLoggedIn ? "isLoggedinTrue" : "isLoggedinFalse"}
      </button>
    </div>
  );
};

export default Header;
