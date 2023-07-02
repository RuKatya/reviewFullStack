import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main>
        <Outlet /> {/* EXPORT */}
      </main>

      <footer>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          reprehenderit inventore atque id necessitatibus nulla ea earum
          voluptates vero quam labore quisquam enim harum, fuga ex, minima
          pariatur, impedit saepe!
        </div>
      </footer>
    </div>
  );
};

export default Layout;
