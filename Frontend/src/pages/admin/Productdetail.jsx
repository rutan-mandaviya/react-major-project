import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncCreateProduct, asyncdeleteProduct, asyncupdateProduct } from "../../store/actions/ProductAction";
import { toast } from "react-toastify";
import axios from "../../api/axiosconfig"

const Productdetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productsReducer.Product);
  const user = useSelector((state) => state.userReducer.user);
  const oneproduct = products?.find((itmes) => itmes.id == id);  
  const { register, handleSubmit,reset } = useForm();


  useEffect(()=>{
    if(products){
      reset({  
        image:oneproduct?.image,
      title:oneproduct?.title,
      description:oneproduct?.description,
      category:oneproduct?.category,
      price:oneproduct?.price})
    }
  },[products])
const navigate = useNavigate();
const dispatch = useDispatch();

const updateproductHandler = (product) => {
  dispatch(asyncupdateProduct(id,product));
  navigate("/")
  
};

const [users, setusers] = useState([])
const fetchuser=async()=>{
  try {
    
   const {data}= await axios.get("/users")
   setusers(data);
   
  } catch (error) {
    console.log(error);
    
    
  }
}
console.log(users);

useEffect(()=>{
  fetchuser()
},[])

const DeleteHandler = () => {
  dispatch(asyncdeleteProduct(id,users));
  
  navigate("/")
};




return oneproduct ? (
  <>
    {/* Product View Section */}
  <div className="w-[90vw] max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-10 p-6  rounded-2xl shadow-lg border border-gray-100">
  {/* Product Image */}
  <div className="md:w-1/2 w-full h-[300px] md:h-[450px] overflow-hidden rounded-xl shadow-sm">
    <img
      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
      src={oneproduct.image}
      alt={oneproduct.title}
    />
  </div>

  {/* Product Details */}
  <div className="md:w-1/2 w-full flex flex-col justify-center gap-6">
    <h1 className="text-3xl font-bold text-gray-800">
      🛍️ {oneproduct.title}
    </h1>

    <h2 className="text-2xl text-green-600 font-bold">
      ₹{oneproduct.price}
    </h2>

    <p className="text-gray-600 text-base leading-relaxed tracking-wide">
      {oneproduct.description}
    </p>

    <hr className="border-gray-300" />

    <button className="w-fit bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl text-base font-semibold transition duration-200 shadow">
      {oneproduct.category}
    </button>
  </div>
</div>

    {/* Admin Update/Delete Form */}
    {user && user.isadmin && (
      <form
  onSubmit={handleSubmit(updateproductHandler)}
  className="mt-12 mx-auto w-[90vw] max-w-3xl  p-8 rounded-2xl shadow-xl flex flex-col gap-6 border border-gray-100"
>
  <input
    {...register("image")}
    type="url"
    placeholder="Image URL"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
  />

  <input
    {...register("title")}
    type="text"
    placeholder="Product Title"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
  />

  <input
    {...register("price")}
    type="number"
    placeholder="Price (e.g. 999.00)"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
  />

  <textarea
    {...register("description")}
    placeholder="Enter description here..."
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200 resize-none"
    rows="4"
  />

  <input
    {...register("category")}
    type="text"
    placeholder="Category"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
  />

  <div className="flex gap-4 justify-end">
    <button
      type="submit"
      className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-sm"
    >
      Update Product
    </button>

    <button
      type="button"
      onClick={DeleteHandler}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-sm"
    >
      Delete Product
    </button>
  </div>
</form>

    )}
  </>
) : (
  "Not found"
);
}

export default Productdetail;
