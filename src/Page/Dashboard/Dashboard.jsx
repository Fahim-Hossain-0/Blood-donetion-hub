import { Navigate } from "react-router";
// import useRole from "../hooks/useRole";
// import AdminDashboard from "./AdminDashboard";
import Loading from "../../Components/Loading";
import useRole from "../../Hooks/useRole";

export default function Dashboard() {
  const { role, loading } = useRole();


  if (loading) {
    return <Loading></Loading>;
  }

  if (role === "donor") {
    return <div>User Dashboard</div>;
  }
  if (role === "moderator") {
    return <div>Moderator Dashboard</div>;
  }

  if (role === "admin") {
    return <AdminDashboard />;
  }

  return <Navigate to={"/"} />;
}
