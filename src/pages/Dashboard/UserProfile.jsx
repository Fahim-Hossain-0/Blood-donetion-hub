import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Edit3, Save } from "lucide-react";

const UserProfile = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // ✅ Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get(`/profile?email=${user?.email}`);
        setProfile(res.data);
        setFormData(res.data);
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to fetch profile", "error");
      }
    };

    fetchProfile();
  }, [axiosInstance, user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.patch(`/users/${profile._id}`, formData);
      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated", "Profile updated successfully", "success");
        setProfile(formData);
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Update failed", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-red-600 to-pink-500 h-40">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={
                formData.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="mt-20 text-center px-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {formData.name || "Unnamed User"}
          </h2>
          <p className="text-gray-500">{formData.email || "No email"}</p>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end px-6 mt-4">
          <button
            onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            {isEditing ? (
              <>
                <Save className="w-5 h-5" /> Save
              </>
            ) : (
              <>
                <Edit3 className="w-5 h-5" /> Edit
              </>
            )}
          </button>
        </div>

        {/* Profile Form */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none transition"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-100 cursor-not-allowed"
              name="email"
              value={formData.email || ""}
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              District
            </label>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none transition"
              name="district"
              value={formData.district || ""}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Upazila
            </label>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none transition"
              name="upazila"
              value={formData.upazila || ""}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Blood Group
            </label>
            <select
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none transition"
              name="blood_group"
              value={formData.blood_group || ""}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Avatar URL
            </label>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none transition"
              name="photoURL"
              value={formData.photoURL || ""}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
