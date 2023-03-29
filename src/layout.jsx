import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>      
          <div className="home-link" key="home-button">
            <Link to="/">
              Home
            </Link>
          </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

