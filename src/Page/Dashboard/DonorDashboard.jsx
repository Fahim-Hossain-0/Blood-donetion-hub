import React, { useContext, useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth"; // or wherever your auth hook is
// import axiosSecure from "../../api/axiosSecure"; // axios instance with token
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const DonorDashboard = () => {
  //   const { user } = useAuth();
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure(); // ✅ CALL the hook

  useEffect(() => {
    if (user?.email) {
      axiosSecure // ✅ lowercase here too
        .get(`/donation-requests/user/${user.email}`)
        .then((res) => {
          const sorted = res.data
            .sort((a, b) => new Date(b.donationDate) - new Date(a.donationDate))
            .slice(0, 3);
          setRequests(sorted);
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}</h1>

      {requests.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-2">Your Recent Requests</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Blood Group</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id}>
                    <td>{req.recipientName}</td>
                    <td>
                      {req.recipientDistrict}, {req.recipientUpazila}
                    </td>
                    <td>{req.donationDate}</td>
                    <td>{req.donationTime}</td>
                    <td>{req.bloodGroup}</td>
                    <td>{req.status}</td>
                    <td className="space-x-1">
                      {req.status === "inprogress" && (
                        <>
                          <button className="btn btn-success btn-sm">
                            Done
                          </button>
                          <button className="btn btn-error btn-sm">
                            Cancel
                          </button>
                        </>
                      )}
                     <Link to={`/dashboardLayout/edit-donation/${req._id}`} className="btn btn-info btn-sm">Edit</Link>
                     <Link to={`/dashboardLayout/view-donation/${req._id}`} className="btn btn-secondary btn-sm">View</Link>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            to="/dashboard/my-donations"
            className="mt-4  btn btn-outline btn-primary"
          >
            View My All Requests
          </Link>
        </>
      )}
    </div>
  );
};

export default DonorDashboard;
