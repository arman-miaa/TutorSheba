import logo from '../assets/logo.png';
import qr from '../assets/qrcode.webp'
import googlePlay from '../assets/googleplay.svg'
import bkash from '../assets/bkash.svg'
import { FaFacebook, FaWhatsapp, FaYoutube,FaHandsHelping  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-base-200 ">
      <div className="footer container mx-auto sm:footer-horizontal text-base-content pt-12">
        <aside className="p-4  rounded-lg">
          <img
            src={logo}
            alt="TutorSheba Logo"
            className="w-[200px] h-[65px] mb-4"
          />
          <p className="text-[#66789c]">
            TutorSheba.com is a platform where parents, students, and tutors can
            easily connect with each other. We provide qualified Home/Online
            tutors to help your child with studies and helping them perform
            better in exams. We are a group of 2,50,000+ Tutors and 30,000+
            satisfied parents/students in Dhaka, Chattagram, Rajshahi, Sylhet,
            Khulna, Barishal, Rangpur, and Mymensingh cities for different
            academic and professional subjects.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:text-blue-800"
            >
              <FaFacebook />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/yourwhatsappphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-2xl hover:text-green-800"
            >
              <FaWhatsapp />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-2xl hover:text-red-800"
            >
              <FaYoutube />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="text-black font-bold">Resources</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Contact</a>
          <h5 className="flex items-center gap-1 text-[#800080]">
            {" "}
            <FaHandsHelping /> <p> Sheba Uddokta</p>
          </h5>
        </nav>
        <nav>
          <h6 className="font-bold">More</h6>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Pay Now</a>
          <img src={bkash} className="w-[95px] h-[45px] cursor-pointer" alt="" />
        </nav>
        <nav className="">
          <h6 className="font-bold">Download Our Mobile App</h6>
          <img src={qr} className="w-[120px] h-[120px] cursor-pointer" alt="" />
          <p className="w-[214px]">
            Our Android App is available right now. Scan the QR Code or Click
            the Button to Download
          </p>
          <img src={googlePlay} className="w-[157px] h-[54px] cursor-pointer" alt="" />
        </nav>
      </div>
      <div className=" container mx-auto items-center p-4">
        <hr className="text-gray-400" />
        <div className="flex justify-between items-center py-4">
          <aside className="">
            <p>
              Copyright © {new Date().getFullYear()} - Tutor Sheba all right
              reserved
            </p>
          </aside>
          <nav className="flex items-center gap-4 font-bold cursor-pointer ">
            <a className="hover:text-blue-500">Privacy</a>
            <a className="hover:text-blue-500">Policy</a>
            <a className="hover:text-blue-500">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer