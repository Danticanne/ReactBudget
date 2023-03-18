import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Link to="/">
          <button className="Link">Budget</button>
        </Link>
        <Link to="/depenses">
          <button className="Link">Dépenses</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
