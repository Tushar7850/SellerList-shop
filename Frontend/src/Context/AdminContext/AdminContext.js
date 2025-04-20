import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();

  // Check if the user is authenticated on page load
  useEffect(() => {
    const checkAuth = async () => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        setUser(JSON.parse(userInfo));  // Set user state if user info is present in localStorage
      }
    };

    checkAuth();
  }, []);

  // Logout function to clear user info and redirect
  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    toast.success("Logout successful!");
    Navigate("/login");
  };

  const value = {
    logout,
    user,
    setUser
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContextProvider;
