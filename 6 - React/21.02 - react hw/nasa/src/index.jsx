import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":id" element={<Item />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
