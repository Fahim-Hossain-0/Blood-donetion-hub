import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Context/AuthContext"; // adjust path
import { useForm } from "react-hook-form";
// import useRole from "../../Hooks/useRole";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Loading from "../../Components/Loading";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import useRole from "../Hooks/useRole";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "./Loading";
// import Loading from "daisyui/components/loading";

const CreateDonationRequest = () => {
  const { user } = useContext(AuthContext);
  const { role, loading } = useRole(); // assumed this hook also gives user info (status)
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, watch, reset } = useForm();
  const [upazilas, setUpazilas] = useState([]);

  const districts = ["Dhaka", "Chattogram", "Barisal", "Khulna", "Rajshahi"];
  const allUpazilas = {
    Dhaka: ["Dhanmondi", "Gulshan", "Mirpur"],
    Chattogram: ["Pahartali", "Panchlaish"],
    Barisal: ["Sadar", "Bakerganj"],
    Khulna: ["Batiaghata", "Terokhada"],
    Rajshahi: ["Boalia", "Rajpara"],
  };

  const onDistrictChange = (e) => {
    const selected = e.target.value;
    setUpazilas(allUpazilas[selected] || []);
  };

  const onSubmit = async (data) => {
    if (user?.status === "blocked") {
      return toast.error("Blocked users cannot request donation.");
    }

    const requestData = {
      ...data,
      requesterName: user.displayName,
      requesterEmail: user.email,
      status: "pending",
    };

    try {
      const res = await axiosSecure.post("/donation-requests", requestData);
      if (res.data.insertedId) {
        toast.success("Donation request created!");
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create request.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Create Donation Request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Requester Name</label>
          <input
            type="text"
            readOnly
            value={user?.displayName}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Requester Email</label>
          <input
            type="email"
            readOnly
            value={user?.email}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Recipient Name</label>
          <input {...register("recipientName", { required: true })} className="input input-bordered w-full" />
        </div>
        <div>
          <label>Recipient District</label>
          <select {...register("recipientDistrict", { required: true })} onChange={onDistrictChange} className="select select-bordered w-full">
            <option value="">Select District</option>
            {districts.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label>Recipient Upazila</label>
          <select {...register("recipientUpazila", { required: true })} className="select select-bordered w-full">
            <option value="">Select Upazila</option>
            {upazilas.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <label>Hospital Name</label>
          <input {...register("hospitalName", { required: true })} className="input input-bordered w-full" />
        </div>
        <div>
          <label>Full Address</label>
          <input {...register("fullAddress", { required: true })} className="input input-bordered w-full" />
        </div>
        <div>
          <label>Blood Group</label>
          <select {...register("bloodGroup", { required: true })} className="select select-bordered w-full">
            <option value="">Select</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Donation Date</label>
          <input type="date" {...register("donationDate", { required: true })} className="input input-bordered w-full" />
        </div>
        <div>
          <label>Donation Time</label>
          <input type="time" {...register("donationTime", { required: true })} className="input input-bordered w-full" />
        </div>
        <div>
          <label>Request Message</label>
          <textarea {...register("requestMessage", { required: true })} className="textarea textarea-bordered w-full"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Request</button>
      </form>
    </div>
  );
};

export default CreateDonationRequest;
