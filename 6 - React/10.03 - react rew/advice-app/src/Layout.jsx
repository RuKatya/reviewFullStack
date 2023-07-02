import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/advice">ADVICE</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
