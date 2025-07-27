// src/Page/Dashboard/DonorWelcome.jsx
import { getAuth } from "firebase/auth";
import useRole from "../../Hooks/useRole";
import Loading from "../../Components/Loading";

const DonorWelcome = () => {
  const { role, loading } = useRole();
  const auth = getAuth();
  const user = auth.currentUser;

  if (loading) return <Loading />;

  if (role !== "doner") {
    return <p className="text-red-600 font-bold">Access Denied: Donors Only</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-600">
        Welcome, {user?.displayName || user?.email}!
      </h1>
      <p className="mt-2 text-lg text-gray-700">Thanks for being a Donor 💖</p>
    </div>
  );
};

export default DonorWelcome;
