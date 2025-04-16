import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().typeError("Price must be a number").required("Price is required"),
  old_price: yup.number().typeError("Old Price must be a number").nullable(),
  price_off: yup.number().typeError("Price Off must be a number").nullable(),
  category: yup.string().required("Category is required"),
  rating: yup.number().typeError("Rating must be a number").min(0).max(5).nullable(),
});

function AddProducts() {
  const [images, setImages] = useState({
    main_img: "",
    item_img_1: "",
    item_img_2: "",
    item_img_3: "",
    item_img_4: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle image change and convert to base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages((prev) => ({ ...prev, [name]: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file); // Converts image to Base64
    }
  };

  // Form submit function
  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      ...images, // Add images (Base64 encoded) to the final form data
    };

    try {
      const res = await axios.post("http://localhost:5000/products/add", finalData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Item added successfully!");
      console.log(res.data);

      reset(); // Reset form fields
      setImages({
        main_img: "",
        item_img_1: "",
        item_img_2: "",
        item_img_3: "",
        item_img_4: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload item.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[{ name: "name", type: "text" }, { name: "price", type: "number" }, { name: "old_price", type: "number" }, { name: "price_off", type: "number" }, { name: "category", type: "text" }, { name: "rating", type: "number" }].map(({ name, type }) => (
          <div key={name}>
            <input
              {...register(name)}
              type={type}
              placeholder={name.replace("_", " ").toUpperCase()}
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
          </div>
        ))}

        {/* Image Inputs */}
        {["main_img", "item_img_1", "item_img_2", "item_img_3", "item_img_4"].map((field) => (
          <div key={field}>
            <label className="block font-medium mb-1 capitalize">
              {field.replace("_", " ")}
            </label>
            <input
              name={field}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
