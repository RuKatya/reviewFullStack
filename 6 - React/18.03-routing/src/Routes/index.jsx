import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "../Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Layout from "../Layout";
import Me from "../Components/Me";
import You from "../Components/You";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />}>
            <Route index element={<Me />} />
            <Route path="you" element={<You />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
