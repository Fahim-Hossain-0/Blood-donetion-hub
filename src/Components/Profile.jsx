import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import useAxiosSecure from "../Hooks/useAxiosSecure";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  
const fetchProfile = async () => {
  const res = await axiosSecure.get(`/users/${user?.email}`);
  setProfileData(res.data);
};


  useEffect(() => {
    if (user?.email) {
      fetchProfile();
    }
  }, [user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const res = await axiosSecure.put(`/users/${user.email}`, {
        name: profileData.name,
        district: profileData.district,
        upazila: profileData.upazila,
        bloodGroup: profileData.bloodGroup,
        avatar: profileData.avatar,
      });

      if (res.data.modifiedCount > 0) {
        toast.success("Profile updated successfully");
        setEditMode(false);
      } else {
        toast("No changes made");
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (!profileData) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-xl mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="btn btn-outline btn-sm"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="btn btn-primary btn-sm"
          >
            Save
          </button>
        )}
      </div>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            disabled={!editMode}
            className="input input-bordered"
          />
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            value={profileData.email}
            disabled
            className="input input-bordered"
          />
        </div>

        <div className="flex flex-col">
          <label>Avatar URL</label>
          <input
            type="text"
            name="avatar"
            value={profileData.avatar}
            onChange={handleChange}
            disabled={!editMode}
            className="input input-bordered"
          />
        </div>

        <div className="flex flex-col">
          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={profileData.bloodGroup}
            onChange={handleChange}
            disabled={!editMode}
            className="select select-bordered"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>District</label>
          <input
            type="text"
            name="district"
            value={profileData.district}
            onChange={handleChange}
            disabled={!editMode}
            className="input input-bordered"
          />
        </div>

        <div className="flex flex-col">
          <label>Upazila</label>
          <input
            type="text"
            name="upazila"
            value={profileData.upazila}
            onChange={handleChange}
            disabled={!editMode}
            className="input input-bordered"
          />
        </div>
      </form>
    </div>
  );
}
