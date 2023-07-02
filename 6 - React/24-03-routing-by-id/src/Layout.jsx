import { Outlet, NavLink } from "react-router-dom";

const Loyout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="orders">Orders</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Loyout;
