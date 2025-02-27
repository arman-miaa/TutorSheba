import { Outlet } from "react-router"
import Navbar from "../componets/Navbar"
import Footer from "../componets/Footer"


const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 right-0 z-50 navbar bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout