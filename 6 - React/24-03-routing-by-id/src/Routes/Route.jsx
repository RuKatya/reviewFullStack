import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Orders from "../Orders";
import Loyout from "../Layout";
import OrderOne from "../OrderOne";
import { GetOut } from "../GetOut";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<App />} />
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":id" element={<OrderOne />} />
          </Route>
          <Route path="*" element={<GetOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
