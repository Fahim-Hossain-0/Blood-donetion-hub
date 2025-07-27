import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const DonationRequestDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/donation-requests/${id}`)
      .then(res => {
        setRequest(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, axiosSecure]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!request) return <div className="p-6">Request not found.</div>;

  return (
    <div className="p-6 space-y-2">
      <h2 className="text-2xl font-bold mb-4">Donation Request Details</h2>
      <p><strong>Requester Name:</strong> {request.requesterName}</p>
      <p><strong>Requester Email:</strong> {request.requesterEmail}</p>
      <p><strong>Recipient Name:</strong> {request.recipientName}</p>
      <p><strong>District:</strong> {request.recipientDistrict}</p>
      <p><strong>Upazila:</strong> {request.recipientUpazila}</p>
      <p><strong>Hospital:</strong> {request.hospitalName}</p>
      <p><strong>Address:</strong> {request.fullAddress}</p>
      <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
      <p><strong>Donation Date:</strong> {request.donationDate}</p>
      <p><strong>Donation Time:</strong> {request.donationTime}</p>
      <p><strong>Request Message:</strong> {request.requestMessage}</p>
      <p><strong>Status:</strong> {request.status}</p>
      {request.status === "inprogress" && request.donor && (
        <>
          <p><strong>Donor Name:</strong> {request.donor.name}</p>
          <p><strong>Donor Email:</strong> {request.donor.email}</p>
        </>
      )}
    </div>
  );
};

export default DonationRequestDetails;
