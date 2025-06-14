import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./Logout";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownMenu, setIsProfileDropdownMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownMenu((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login page
  };

  const menuClass = "selected";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile */}
        <div
          className="profile position-relative"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {/* Dropdown */}
          {isProfileDropdownMenu && (
            <div className="dropdown-menu position-absolute top-100 start-0 mt-2 shadow rounded bg-white">
              <Logout />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
