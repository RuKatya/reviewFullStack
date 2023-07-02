import React from "react";
import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <div className="sideBar">
        <Link to="/about">Me</Link>
        <Link to="you">You</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
