// DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router';
import SideNavbar from '../../Components/SideNavbar';
// import EditDonationRequest from './EditDonationRequest';


const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideNavbar></SideNavbar>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
     
    </div>
  );
};

export default DashboardLayout;
