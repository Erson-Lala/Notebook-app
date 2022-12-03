import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./index.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Todo</Link>
          </li>
          <li>
            <Link to="/note">Note</Link>
          </li> 
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;