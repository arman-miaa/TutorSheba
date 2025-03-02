"use client";

import { useState } from "react";
import registerImg from "../assets/registerImg.svg";
import teacher from "../assets/teacher.webp";
import student from "../assets/student.webp";
import axios from "axios";
import { useNavigate } from "react-router";

const districtThanaData = {
  Dhaka: ["Dhanmondi", "Mirpur", "Gulshan", "Uttara", "Mohammadpur"],
  Chittagong: ["Agrabad", "Pahartali", "Halishahar", "Panchlaish"],
  Khulna: ["Sonadanga", "Khalishpur", "Daulatpur", "Batiaghata"],
};

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("tutor");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [availableThanas, setAvailableThanas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form data states
  const [tutorForm, setTutorForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    district: "",
    location: "",
    preferredArea: "",
    password: "",
    confirmPassword: "",
  });

  const [studentForm, setStudentForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setAvailableThanas(districtThanaData[district] || []);

    // Update form data
    if (role === "tutor") {
      setTutorForm({
        ...tutorForm,
        district: district,
      });
    }
  };

  const handleTutorFormChange = (e) => {
    const { name, value } = e.target;
    setTutorForm({
      ...tutorForm,
      [name]: value,
    });
  };

  const handleStudentFormChange = (e) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (role === "tutor") {
        // Validate passwords match
        if (tutorForm.password !== tutorForm.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        // Submit tutor data to backend
        const tutorData = {
          name: tutorForm.name,
          email: tutorForm.email,
          phone: tutorForm.phone,
          gender: tutorForm.gender,
          district: tutorForm.district,
          location: tutorForm.location,
          preferredArea: tutorForm.preferredArea,
          password: tutorForm.password,
          role: "tutor",
        };

        const response = await axios.post(
          "http://localhost:5000/tutors",
          tutorData,
          { withCredentials: true }
        );
        console.log("Tutor registered successfully:", response.data);
        navigate("/"); // Redirect to login page after successful registration
      } else {
        // Validate passwords match
        if (studentForm.password !== studentForm.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        // Submit student data to backend
        const studentData = {
          name: studentForm.name,
          phone: studentForm.phone,
          password: studentForm.password,
          role: "student",
        };

        const response = await axios.post(
          "http://localhost:5000/students",
          studentData
        );
        console.log("Student registered successfully:", response.data);
        navigate("/"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
      {/* Left Side Image */}
      <div className="flex-1 mb-6 md:mb-0">
        <img
          src={registerImg || "/placeholder.svg"}
          className="w-full max-w-[453px] h-auto mx-auto"
          alt="Register"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 border-2 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <hr className="w-1/2 text-center mx-auto my-4 border-pink-500" />

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Role Selection */}
        <div className="bg-gray-100 flex justify-between items-center p-4 rounded-md">
          {/* Tutor Option */}
          <label className="flex items-center gap-2 cursor-pointer">
            <img
              src={teacher || "/placeholder.svg"}
              className="w-14 h-14 object-cover rounded-full border-2 border-pink-500"
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

          {/* Student Option */}
          <label className="flex items-center gap-2 cursor-pointer">
            <img
              src={student || "/placeholder.svg"}
              className="w-14 h-14 object-cover rounded-full border-2 border-pink-500"
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

        <form onSubmit={handleSubmit}>
          {/* Tutor Form */}
          {role === "tutor" && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className="w-full p-2 border rounded"
                value={tutorForm.name}
                onChange={handleTutorFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full p-2 border rounded"
                value={tutorForm.email}
                onChange={handleTutorFormChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                className="w-full p-2 border rounded"
                value={tutorForm.phone}
                onChange={handleTutorFormChange}
                required
              />
              <select
                name="gender"
                className="w-full p-2 border rounded"
                value={tutorForm.gender}
                onChange={handleTutorFormChange}
                required
              >
                <option value="">Choose Gender *</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="district"
                className="w-full p-2 border rounded"
                value={tutorForm.district}
                onChange={handleDistrictChange}
                required
              >
                <option value="">Select Tuition District *</option>
                {Object.keys(districtThanaData).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <select
                name="location"
                className="w-full p-2 border rounded"
                value={tutorForm.location}
                onChange={handleTutorFormChange}
                required
              >
                <option value="">Select Your Location</option>
                {selectedDistrict ? (
                  availableThanas.map((thana, index) => (
                    <option key={index} value={thana}>
                      {thana}
                    </option>
                  ))
                ) : (
                  <option disabled>Not selected any district</option>
                )}
              </select>
              <select
                name="preferredArea"
                className="w-full p-2 border rounded"
                value={tutorForm.preferredArea}
                onChange={handleTutorFormChange}
                required
              >
                <option value="">Select Preferred Tuition Area *</option>
                {selectedDistrict ? (
                  availableThanas.map((thana, index) => (
                    <option key={index} value={thana}>
                      {thana}
                    </option>
                  ))
                ) : (
                  <option disabled>Not selected any district</option>
                )}
              </select>
              <input
                type="password"
                name="password"
                placeholder="Password *"
                className="w-full p-2 border rounded"
                value={tutorForm.password}
                onChange={handleTutorFormChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password *"
                className="w-full p-2 border rounded"
                value={tutorForm.confirmPassword}
                onChange={handleTutorFormChange}
                required
              />
            </div>
          )}

          {/* Student Form */}
          {role === "student" && (
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="w-full p-2 border rounded"
                  value={studentForm.name}
                  onChange={handleStudentFormChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone *"
                  className="w-full p-2 border rounded"
                  value={studentForm.phone}
                  onChange={handleStudentFormChange}
                  required
                />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password *"
                className="w-full p-2 border rounded"
                value={studentForm.password}
                onChange={handleStudentFormChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password *"
                className="w-full p-2 border rounded"
                value={studentForm.confirmPassword}
                onChange={handleStudentFormChange}
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-pink-500 text-white rounded mt-6"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
