import { useState } from "react";
import loginImg from "../assets/login.svg";
import teacher from "../assets/teacher.webp";
import student from "../assets/student.webp";
import axios from "axios";
import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useUserContext(); // Extract setUserData from the context
  const [role, setRole] = useState("tutor");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    identifier: "", // Email or Phone
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://tutorsheba.onrender.com/login",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("🔹 Server Response:", response.data);

      if (response.data?.user) {
        const userData = response.data.user; // Extract user data from response
        setUserData(userData); // Update the context with user data

        // navigate(role === "tutor" ? "/tutor-dashboard" : "/student-dashboard");
        navigate("/");
      } else {
        console.log("❌ No user data received");
        setError("Failed to log in. Please try again.");
      }
    } catch (error) {
      console.error("❌ Login error:", error.response?.data || error.message);
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex-1 mb-6 md:mb-0">
        <img
          src={loginImg}
          className="w-full max-w-[453px] mx-auto"
          alt="Login"
        />
      </div>
      <div className="flex-1 border-2 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <hr className="w-1/2 mx-auto my-4 border-pink-500" />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <div className="bg-gray-100 flex justify-between items-center p-4 rounded-md">
          <label className="flex items-center gap-2 cursor-pointer">
            <img
              src={teacher}
              className={`w-14 h-14 rounded-full border-2 border-pink-500 ${
                role === "tutor" ? "border-4 border-blue-500" : ""
              }`}
              alt="Tutor"
            />
            <input
              type="radio"
              name="role"
              value="tutor"
              checked={role === "tutor"}
              onChange={() => setRole("tutor")}
              className="w-5 h-5 accent-pink-500"
            />
            <span className="text-lg font-medium">Tutor</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <img
              src={student}
              className={`w-14 h-14 rounded-full border-2 border-pink-500 ${
                role === "student" ? "border-4 border-blue-500" : ""
              }`}
              alt="Student"
            />
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
              className="w-5 h-5 accent-pink-500"
            />
            <span className="text-lg font-medium">Student</span>
          </label>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="text"
            name="identifier"
            placeholder="Email or Phone *"
            className="w-full p-2 border rounded"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password *"
              className="w-full p-2 border rounded"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-pink-500 text-white rounded mt-6"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : `Login as a ${role === "tutor" ? "Tutor" : "Student"}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
