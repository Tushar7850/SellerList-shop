import React, { useContext, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { GoAlert } from "react-icons/go";
import { AdminContext } from "../../Context/AdminContext/AdminContext";
import { CommonApiUrl } from "../../HttpCommon";

function Account() {
  const { user } = useContext(AdminContext);
  const [showPassword, setShowPassword] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePasswordHandler = async () => {
    try {
      const res = await fetch(`${CommonApiUrl}/api/users/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Password changed successfully");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteAccountHandler = async () => {
    const confirm = window.confirm("Are you sure you want to delete your account?");
    if (!confirm) return;

    try {
      const res = await fetch("/api/users/delete-user", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Account deleted successfully");

      // Optional: Clear user state / logout
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="pt-4">
      <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
      <hr className="mt-4 mb-8" />

      {/* Email */}
      <p className="py-2 text-xl font-semibold">Email Address</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your email address is <strong>{user?.email}</strong>
        </p>
        <button className="inline-flex text-sm font-semibold text-cyan-400 underline decoration-2">
          Change
        </button>
      </div>

      <hr className="mt-4 mb-8" />

      {/* Password */}
      <p className="py-2 text-xl font-semibold">Password</p>
      <div className="flex items-center">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          <label>
            <span className="text-sm text-gray-500">Current Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-cyan-400">
              <input
                type={showPassword ? "password" : "text"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
          <label>
            <span className="text-sm text-gray-500">New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-cyan-400">
              <input
                type={showPassword ? "password" : "text"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>
        <button
          className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>

      <p className="mt-2">
        Can't remember your current password?{" "}
        <span className="text-sm font-semibold text-cyan-400 underline decoration-2">
          Recover Account
        </span>
      </p>
      <button
        className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 text-white"
        onClick={changePasswordHandler}
      >
        Save Password
      </button>

      <hr className="mt-4 mb-8" />

      {/* Delete Account */}
      <div className="mb-10">
        <p className="py-2 text-xl font-semibold">Delete Account</p>
        <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
          <button className="mr-2 h-5 w-5">
            <GoAlert />
          </button>
          Proceed with caution
        </p>
        <p className="mt-2">
          Make sure you have taken backup of your account in case you ever
          need to get access to your data. We will completely wipe your data.
          There is no way to access your account after this action.
        </p>
        <button
          className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
          onClick={deleteAccountHandler}
        >
          Continue with deletion
        </button>
      </div>
    </div>
  );
}

export default Account;
