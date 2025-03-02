import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../Firebase.congif";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [user, setUser] = useState(false);

  const Navigate = useNavigate();

  useEffect(() => {
    const unSubscibe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unSubscibe();
  }, []);

  const logout = () => {
    auth.signOut();
    toast.success("Logout sucees !");
    Navigate("/");
  };

  const value = {
    logout,
    user,
  };

  return (
    <div>
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
    </div>
  );
}

export default AdminContextProvider;
