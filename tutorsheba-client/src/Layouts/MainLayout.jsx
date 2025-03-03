import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 right-0 z-50 navbar bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#7d0c70]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
