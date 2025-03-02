"use client";

import { useState } from "react";
import loginImg from "../assets/login.svg";
import teacher from "../assets/teacher.webp";
import student from "../assets/student.webp";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("tutor");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    identifier: "", // Email or Phone
    password: "",
  });

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
      const endpoint = role === "tutor" ? "tutors/login" : "students/login";
      await axios.post(`http://localhost:5000/${endpoint}`, formData);
      navigate("/");
    } catch (error) {
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
              className="w-14 h-14 rounded-full border-2 border-pink-500"
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
              className="w-14 h-14 rounded-full border-2 border-pink-500"
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
          <input
            type="password"
            name="password"
            placeholder="Password *"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
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
