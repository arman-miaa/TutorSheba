import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MdLogin } from "react-icons/md";
import { FaSignOutAlt, FaArrowDown, FaBell } from "react-icons/fa"; // Update this import
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router"; // Update import for NavLink
import { useUserContext } from "../context/UserContext";
import { FaPersonRifle, FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the user dropdown on mobile
  const { user, logOut } = useUserContext();
  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logOut();
    setIsMenuOpen(false);
  };

const linkClasses = ({ isActive }) =>
  `text-lg font-medium hover:underline hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-8 
  ${
    isActive
      ? "underline decoration-blue-500 decoration-2 underline-offset-4"
      : ""
  }`;

const links = (
  <>
    <li>
      <NavLink to="/tuttion_jobs" className={linkClasses}>
        TUITION JOBS
      </NavLink>
    </li>

    <li>
      <NavLink to="/premium_tutors" className={linkClasses}>
        PREMIUM TUTORS
      </NavLink>
    </li>

    <li>
      <NavLink to="/tutor_request" className={linkClasses}>
        TUTOR REQUEST
      </NavLink>
    </li>

    <li>
      <NavLink to="/courses" className={linkClasses}>
        COURSES
      </NavLink>
    </li>
  </>
);


  return (
    <div className=" w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-[180px] h-[58px]" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-white font-bold">
            <ul className="flex items-center gap-8 text-lg font-medium">
              {links}
            </ul>
          </div>

          {/* Register & Login (Desktop) */}
          {user ? (
            <div className=" items-center hidden lg:flex gap-2 text-white relative">
              <span>{user.name}</span>
              <FaArrowDown
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the user menu
              />
              <FaBell className="text-lg cursor-pointer ml-2" />

              {/* Dropdown for Profile/Logout */}
              {isMenuOpen && (
                <div className="absolute  top-10 right-0 bg-gray-800 text-white p-3 rounded-lg shadow-lg">
                  <div className="cursor-pointer flex items-center gap-2">
                    <FaUser />
                    <Link>Profile</Link>
                  </div>
                  <div className="cursor-pointer flex items-center gap-2">
                    <MdLogin />
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex gap-3 text-white font-bold">
              <Link
                to="/register"
                className="flex items-center border-2 py-[6px] px-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              >
                <FaSignOutAlt className="mr-1 text-lg" />
                Register
              </Link>
              <Link
                to="/login"
                className="flex items-center border-2 py-[6px] px-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              >
                <MdLogin className="mr-1 text-xl" />
                Login
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-center gap-4 py-4 text-white font-bold">
              {links}
            </ul>

            <div className="flex flex-col gap-2 py-4 items-center justify-center">
              {user ? (
                <div className="flex items-center gap-2 relative">
                  <span>{user.name}</span>
                  <FaArrowDown
                    className="cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                  <FaBell className="text-lg cursor-pointer ml-2" />

                  {/* Dropdown for Profile/Logout */}
                  {isMenuOpen && (
                    <div className=" mt-8 left-0 bg-gray-600 text-white p-3 rounded-lg shadow-lg w-40">
                      <div className="cursor-pointer flex items-center gap-2">
                        <FaUser />
                        <Link>Profile</Link>
                      </div>
                      <div className="cursor-pointer flex items-center gap-2">
                        <MdLogin />
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="flex items-center justify-center border-2 py-[6px] px-3 text-white font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  >
                    <FaSignOutAlt className="mr-1 text-lg" />
                    Register
                  </NavLink>

                  <Link
                    to="/login"
                    className="flex items-center justify-center border-2 py-[6px] px-3 text-white font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  >
                    <MdLogin className="mr-1 text-xl" />
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
