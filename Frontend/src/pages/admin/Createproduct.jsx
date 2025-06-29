import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/ProductAction";

const Createproduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productHandler = (product) => {
    product.id = nanoid();

    console.log(product);
    navigate("/products");
    dispatch(asyncCreateProduct(product));
    navigate("/")
    reset();
  };

  

  return <div className="w-fit mx-auto shadow-md shadow-indigo-400 bg-white rounded-xl p-8">
  <h1 className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-md font-bold text-xl mb-10">
    ⭕ Create Product
  </h1>
  <form
    onSubmit={handleSubmit(productHandler)}
    className="flex flex-col gap-5"
  >
    {/* Image URL */}
    <input
      {...register("image")}
      type="url"
      placeholder="Image URL"
      className="border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none p-3 text-lg rounded-md transition-all duration-200 shadow-sm"
    />

    <div className="flex gap-4">
      <input
        {...register("title")}
        type="text"
        placeholder="Product Title"
        className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md transition-all duration-200 shadow-sm w-full"
      />

      <input
        {...register("price")}
        type="number"
        placeholder="Price (e.g., 999.00)"
        className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md transition-all duration-200 shadow-sm w-full"
      />
    </div>

    {/* Description */}
    <textarea
      {...register("description")}
      placeholder="Enter product description..."
      className="border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none p-3 text-lg rounded-md resize-none transition-all duration-200 shadow-sm"
      rows="3"
    ></textarea>

    {/* Category */}
    <input
      {...register("category")}
      type="text"
      placeholder="Category Name"
      className="border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none p-3 text-lg rounded-md transition-all duration-200 shadow-sm"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-colors duration-300 text-white text-lg px-6 py-2 rounded-lg shadow-lg"
    >
      Create Product
    </button>
  </form>
</div>


};

export default Createproduct;
