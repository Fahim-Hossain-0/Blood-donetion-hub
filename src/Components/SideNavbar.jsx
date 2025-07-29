import React from "react";
import { NavLink, Link } from "react-router"; // ✅ Fixed import
import useRole from "../Hooks/useRole"; // adjust path if needed
import Loading from "./Loading";

const SideNavbar = () => {
  const { role, loading } = useRole();

  // if (loading) return <Loading />;

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 rounded bg-red-500 text-white font-semibold"
      : "block px-4 py-2 rounded hover:bg-red-100 text-gray-700";

  const commonLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboardLayout/profile", label: "Profile" },
  ];

  const donorLinks = [
    // { to: "/dashboard/donate", label: "Donate Food" },
    { to: "/dashboardLayout/dashBoard", label: "My Donations" },
    { to: "/dashboardLayout/create-donation-request", label: "Create donation request" },
  ];

  const moderatorLinks = [
    { to: "/dashboard/review-foods", label: "Review Foods" },
    { to: "/dashboard/manage-users", label: "Manage Users" },
  ];

  const adminLinks = [
    { to: "/dashboardLayout/adminDeshboard", label: "Admin deshboard" },
    { to: "/dashboardLayout/allUsers", label: "All Users" },
    { to: "/dashboard/site-settings", label: "Site Settings" },
  ];

  let roleLinks = [];
  if (role === "donor") roleLinks = donorLinks;
  else if (role === "moderator") roleLinks = moderatorLinks;
  else if (role === "admin") roleLinks = adminLinks;

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg flex flex-col">
      {/* Logo / Site Name */}
      <Link to="/" className="text-3xl font-bold text-red-700 mb-6">
        Red <span className="text-yellow-600">Blood</span>
      </Link>

      <ul className="space-y-2">
        {[...commonLinks, ...roleLinks].map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={navLinkClasses}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
