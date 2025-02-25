import { Outlet } from "react-router"
import Navbar from "../componets/Navbar"
import Footer from "../componets/Footer"


const MainLayout = () => {
  return (
      <div>
          <Navbar />
          <div className="min-h-[calc(100vh-300px)]">
              <Outlet/>
          </div>
          <Footer/>
    </div>
  )
}

export default MainLayout