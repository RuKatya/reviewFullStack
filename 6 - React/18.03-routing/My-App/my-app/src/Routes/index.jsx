import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout';
import Home from '../Home';
import About from '../Components/About'
import Contact from '../Components/Contact'
import FaceBook from '../Components/FaceBook';
import WhatsApp from '../Components/WhatsApp';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact/*' element={<Contact />}>
            <Route index element={<FaceBook />} />
            <Route path='WhatsApp' element={<WhatsApp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;