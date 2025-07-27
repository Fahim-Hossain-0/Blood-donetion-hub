import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const EditDonationRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/donation-requests/${id}`).then((res) => {
      reset(res.data); // Prefill the form
      setLoading(false);
    });
  }, []);

  const onSubmit = async (data) => {
    const res = await axiosSecure.put(`/donation-requests/${id}`, data);
    if (res.data.modifiedCount > 0) {
      toast.success("Donation request updated!");
      navigate("/dashboard"); // Go back to dashboard after update
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Donation Request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("recipientName")} placeholder="Recipient Name" className="input input-bordered w-full" />
        <input {...register("recipientDistrict")} placeholder="District" className="input input-bordered w-full" />
        <input {...register("recipientUpazila")} placeholder="Upazila" className="input input-bordered w-full" />
        <input {...register("donationDate")} type="date" className="input input-bordered w-full" />
        <input {...register("donationTime")} type="time" className="input input-bordered w-full" />
        <input {...register("bloodGroup")} placeholder="Blood Group" className="input input-bordered w-full" />
        <select {...register("status")} className="select select-bordered w-full">
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button type="submit" className="btn btn-primary w-full">
          Update Donation Request
        </button>
      </form>
    </div>
  );
};

export default EditDonationRequest;
