import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a UserContext
const UserContext = createContext();

// Custom hook to use UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap your app with the context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to set user data
  const setUserData = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  // Function to log out user
  const logOut = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Fetch user data when the page loads
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile", {
        withCredentials: true,
      });

      console.log("Fetched User Data:", response.data); // Debugging

      if (response.data?.email || response.data?.name) {
        setUserData(response.data);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); // The component will fetch user data when it mounts

  // Listen for changes in user data after registration
  const handleUserRegistration = () => {
    // Re-fetch user data after registration (or call your registration API here)
    fetchUserData();
  };

  console.log("User Context:", user); // Debugging

  return (
    <UserContext.Provider
      value={{ user, setUserData, logOut, loading, handleUserRegistration }}
    >
      {children}
    </UserContext.Provider>
  );
};
