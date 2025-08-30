import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const RootLayout = () => {
    return (
        <div>
<header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-900 via-green-600 to-lime-600 shadow-md">
  <Navbar />
</header>


            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;