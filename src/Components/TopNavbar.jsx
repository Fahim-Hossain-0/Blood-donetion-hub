import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/donation-requests"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "hover:text-primary"
          }
        >
          Donation Requests
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "hover:text-primary"
          }
        >
          Blog
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/funding"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "hover:text-primary"
            }
          >
            Funding
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-6">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition duration-200"
          >
            🩸 BloodConnect
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1 text-base font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          {/* Auth: Not Logged In */}
          {!user ? (
            <Link
              to="/auth/login"
              className="btn btn-sm btn-outline btn-primary rounded-full"
            >
              Login
            </Link>
          ) : (
            // Auth: Logged In
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                {user.photoURL ? (
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt="user avatar" />
                  </div>
                ) : (
                  <FaUserCircle className="text-3xl text-primary" />
                )}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[99] p-3 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-1"
              >
                <li>
                  <NavLink to="/dashboardLayout">Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={1} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[99] p-3 shadow-lg bg-base-100 rounded-box w-52 space-y-2"
            >
              {navLinks}
              {user && (
                <>
                  <li>
                    <NavLink to="/dashboardLayout">Dashboard</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              )}
              {!user && (
                <div className="text-center">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
