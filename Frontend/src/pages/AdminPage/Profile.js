import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CommonApiUrl } from '../../HttpCommon';

function Profile() {
  const { id } = useParams(); // assuming route like /profile/:id
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${CommonApiUrl}/api/users/profile/${id}`);
        setUser(res.data);
        setForm(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile. Please try again later.");
      }
    };

    fetchProfile();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/users/profile/${id}`, form);
      setEditMode(false);
      setError(""); // clear errors on success
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

      {editMode ? (
        <>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};


export default Profile




