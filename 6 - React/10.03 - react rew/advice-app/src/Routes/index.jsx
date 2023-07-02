import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import App from "../App";
import Layout from "../Layout";
import Advice from "../components/Advice";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="advice" element={<Advice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
