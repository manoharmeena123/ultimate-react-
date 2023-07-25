import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Speak from "./Speak";
import Home from "./Home";

import Topics from './Topics'
import Cards from "./Cards";
const MainRouter = () => {
  return (
    <>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speak />} />
        <Route path="/cards" element={<Cards/>} />
        <Route path="/topics" element={<Topics/>} />
      </Routes>
    </>
  );
};

export default MainRouter;
