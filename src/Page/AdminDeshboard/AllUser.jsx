import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUserShield, FaUserPlus, FaUserSlash } from "react-icons/fa";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import CustomDropdown from "../../Components/CustomDropdown";

const AllUsers = () => {
    // const { user}= useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
    // console.log({users});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchUsers = async () => {
    const res = await axiosSecure.get(`/users?page=${page}&limit=10&status=${statusFilter}`);
    setUsers(res.data.users);
    setTotalPages(Math.ceil(res.data.total / 10));
  };

  useEffect(() => {
    fetchUsers();
  }, [page, statusFilter]);

  const handleUpdate = async (id, type, value) => {
    await axiosSecure.patch(`/users/${id}`, { [type]: value });
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>

      <div className="mb-4">
        <label>Status Filter: </label>
        <select
          className="border rounded p-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
            <tr key={user._id} className="text-center border-t">
              <td><img src={user.image} className="w-10 h-10 rounded-full mx-auto" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              {  console.log(user.name,user.role)}
              <td>
               <CustomDropdown
  actions={[
    user.status === "active"
      ? {
          label: (
            <span className="flex items-center">
              <FaUserSlash className="mr-1" /> Block
            </span>
          ),
          onClick: () => handleUpdate(user._id, "status", "blocked"),
        }
      : {
          label: (
            <span className="flex items-center">
              <FaUserPlus className="mr-1" /> Unblock
            </span>
          ),
          onClick: () => handleUpdate(user._id, "status", "active"),
        },
    ...(user.role !== "volunteer"
      ? [
          {
            label: "Make Volunteer",
            onClick: () => handleUpdate(user._id, "role", "volunteer"),
          },
        ]
      : []),
    ...(user.role !== "admin"
      ? [
          {
            label: (
              <span className="flex items-center">
                <FaUserShield className="mr-1" /> Make Admin
              </span>
            ),
            onClick: () => handleUpdate(user._id, "role", "admin"),
          },
        ]
      : []),
  ]}
/>

              </td>
            </tr>
          ))} */}
          {users.map(({ _id, image, name, email, role, status }) => (
  <tr key={_id} className="text-center border-t">
    <td>
      <img
        src={image || "https://via.placeholder.com/40"}
        alt="avatar"
        className="w-10 h-10 rounded-full mx-auto"
      />
    </td>
    <td>{name || "N/A"}</td>
    <td>{email || "N/A"}</td>
    <td>{role || "N/A"}</td>
    <td>{status || "N/A"}</td>
    <td>
      <CustomDropdown
        actions={[
          status === "active"
            ? {
                label: (
                  <span className="flex items-center">
                    <FaUserSlash className="mr-1" /> Block
                  </span>
                ),
                onClick: () => handleUpdate(_id, "status", "blocked"),
              }
            : {
                label: (
                  <span className="flex items-center">
                    <FaUserPlus className="mr-1" /> Unblock
                  </span>
                ),
                onClick: () => handleUpdate(_id, "status", "active"),
              },
          ...(role !== "volunteer"
            ? [
                {
                  label: "Make Volunteer",
                  onClick: () => handleUpdate(_id, "role", "volunteer"),
                },
              ]
            : []),
          ...(role !== "admin"
            ? [
                {
                  label: (
                    <span className="flex items-center">
                      <FaUserShield className="mr-1" /> Make Admin
                    </span>
                  ),
                  onClick: () => handleUpdate(_id, "role", "admin"),
                },
              ]
            : []),
        ]}
      />
    </td>
  </tr>
))}

        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex gap-2 justify-center">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`px-3 py-1 rounded border ${page === num + 1 ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;