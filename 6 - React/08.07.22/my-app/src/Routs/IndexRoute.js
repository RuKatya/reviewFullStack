import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Shop from '../Pages/Shop';

const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          {/* <Route path="cart" element={'.....'} />
          <Route path="auth" element={...}>
              <Route index element={...}
              <Route path="..." element={...}
            
          </Route>*/}
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRoute