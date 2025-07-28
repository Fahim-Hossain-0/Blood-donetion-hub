// src/pages/Dashboard/AdminDashboard.jsx

import { useContext, useEffect, useState } from "react";
import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth"; // your custom auth hook
// import axiosSecure from "../../api/axiosSecure"; // axios instance with auth token

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [stats, setStats] = useState({
    users: 0,
    funds: 0,
    bloodRequests: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [usersRes, fundsRes, bloodRes] = await Promise.all([
        axiosSecure.get("/users"),
        axiosSecure.get("/funds"),
        axiosSecure.get("/donation-requests"),
      ]);

      setStats({
        users: usersRes.data.length,
        funds: fundsRes.data.reduce((acc, cur) => acc + cur.amount, 0),
        bloodRequests: bloodRes.data.length,
      });
    };

    fetchStats();
  }, []);

  return (
    <div className="p-5 space-y-8">
      {/* Welcome section */}
      <h2 className="text-2xl font-bold">
        Welcome back, <span className="text-primary">{user?.displayName || "Admin"}</span>! 🎉
      </h2>

      {/* Statistics section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white shadow rounded-2xl p-6 border flex items-center gap-4">
          <div className="bg-purple-100 p-4 rounded-full text-purple-700 text-3xl">
            <FaUser />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Donors</p>
            <p className="text-2xl font-bold">{stats.users}</p>
          </div>
        </div>

        {/* Total Funding */}
        <div className="bg-white shadow rounded-2xl p-6 border flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full text-green-700 text-3xl">
            <FaMoneyBillWave />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Funding</p>
            <p className="text-2xl font-bold">${stats.funds.toFixed(2)}</p>
          </div>
        </div>

        {/* Total Blood Donation Requests */}
        <div className="bg-white shadow rounded-2xl p-6 border flex items-center gap-4">
          <div className="bg-red-100 p-4 rounded-full text-red-700 text-3xl">
            <FaTint />
          </div>
          <div>
            <p className="text-sm text-gray-500">Blood Requests</p>
            <p className="text-2xl font-bold">{stats.bloodRequests}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
