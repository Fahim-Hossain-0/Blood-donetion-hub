import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink, Link, useLocation } from 'react-router';

const TopNavbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  // Hide TopNavbar if on dashboard route
  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  const Links = (
    <>
      <NavLink to="/" className="font-semibold text-base">Home</NavLink>
      <NavLink to="/dashboardLayout" className="font-semibold text-base">Dashboard</NavLink>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch();
  };

  return (
    <div className="navbar mt-3 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box">
            {Links}
          </ul>
        </div>
        <Link to='/' className="font-bold text-3xl text-red-700">Red <span className='text-yellow-700'>Blood</span></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {Links}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {user ? (
            <div className="dropdown dropdown-end space-x-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      title={user?.displayName || 'User'}
                    />
                  ) : (
                    <span className="text-sm font-medium">
                      {user?.displayName?.split(" ")[0] || "User"}
                    </span>
                  )}
                </div>
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">Sign out</button>
            </div>
          ) : (
            <Link to='/auth/login' className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
