import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ShortLogo from "../../assets/communityamerica_short_logo.webp";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/home">
                <img src={ShortLogo} alt="" height="25px" width="25px" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/segments">Segments</NavLink>
            </li>
            <li>
              <NavLink to="/advisors">Advisors</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
