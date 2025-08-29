import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  hideHorizontalNavbar?: boolean;
}

const Login: React.FC<LoginProps> = ({ hideHorizontalNavbar }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const prevUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { email, name, info };
    localStorage.setItem("users", JSON.stringify([...prevUsers, newUser]));

    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center">
      {!hideHorizontalNavbar && <h2 className="text-xl mb-4">Login</h2>}
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
