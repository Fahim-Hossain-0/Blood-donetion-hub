import React from "react";
import { NavLink, Link } from "react-router";

const SideNavbar = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 rounded bg-red-500 text-white font-semibold"
      : "block px-4 py-2 rounded hover:bg-red-100 text-gray-700";

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg flex flex-col">
      {/* Logo / Site Name */}
      <Link to="/" className="text-3xl font-bold text-red-700 mb-6">
        Red <span className="text-yellow-600">Blood</span>
      </Link>

      <ul className="space-y-2">
        {/* Home link */}
        <li>
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
        </li>

        {/* Dashboard routes */}
        <li>
          <NavLink to="/dashboard/profile" className={navLinkClasses}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/another" className={navLinkClasses}>
            Another
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
