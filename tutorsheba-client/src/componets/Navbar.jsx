

import { useState } from "react";
import logo from '../assets/logo.png'
import { MdLogin } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";

import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <li>
        <NavLink to="/tuttion_jobs" className="hover:underline">
          TUITION JOBS
        </NavLink>
      </li>
      <li>
        <NavLink to="/premium_tutors" className="hover:underline">
          PREMIUM TUTORS
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutor_request" className="hover:underline">
          TUTOR REQUEST
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" className="hover:underline">
          COURSES
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 right-0 z-50 w-full bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890] transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-[180px] h-[58px]" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-white font-bold">
            <ul className="flex items-center gap-8">{links}</ul>
          </div>

          {/* Register & Login (Desktop) */}
          <div className="hidden lg:flex gap-3 text-white font-bold">
            <Link
              href="/register"
              className="flex items-center border-2 py-[6px] px-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              <FaArrowRightFromBracket className="mr-1 text-lg" />
              Register
            </Link>
            <Link
              href="/login"
              className="flex items-center border-2 py-[6px] px-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              <MdLogin className="mr-1 text-xl" />
              Login
            </Link>
          </div>

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
            <div className="flex flex-col gap-2 py-4  items-center justify-center">
             
                <Link
                  href="/register"
                  className="flex items-center justify-center border-2 py-[6px] px-3 text-white font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                >
                  <FaArrowRightFromBracket className="mr-1 text-lg" />
                  Register
                </Link>
             
              <Link
                href="/login"
                className="flex items-center justify-center border-2 py-[6px] px-3 text-white font-bold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              >
                <MdLogin className="mr-1 text-xl" />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
