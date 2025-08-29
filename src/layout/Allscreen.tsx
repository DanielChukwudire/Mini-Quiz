import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Header from "../Static/Header";
import Footer from "../Static/Footer";
import Login from "../AuthPage/Login";

const AllScreen: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllScreen;
