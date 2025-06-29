import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncdeleteUser, asyncLogoutuser, asyncupdateuser } from '../store/actions/UserAction';
import { motion } from "motion/react"
const Userprofile = () => {
    const { id } = useParams();
    const navigate=useNavigate()
   const dispatch=useDispatch()
   
//   const products = useSelector((state) => state.productsReducer.Product);
  const user = useSelector((state) => state.userReducer.user);
console.log(user);
      
  const { register, handleSubmit,reset } = useForm();
   useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        username: user.username,
        password: user.password,
      });
    }
  }, [user]);


const updateuserHandler = (users) => {
  dispatch(asyncupdateuser(user.id,users));
  
  
};
const DeleteuserHandler = () => {
  dispatch(asyncdeleteUser(user.id));
  navigate("/login")
};
const Logouthandle=()=>{
    dispatch(asyncLogoutuser())
    navigate("/login")
   }
  return user?(
   <div className="w-full h-fit bg-gradient-to-tr  ">
  <form
    onSubmit={handleSubmit(updateuserHandler)}
    className=" mx-auto w-[90vw] max-w-3xl bg-white p-8 rounded-xl shadow-xl flex flex-col gap-8"
  >
    <h1 className="text-center text-3xl font-bold text-emerald-500  ">Update Profile ✏️</h1>

    <input
      {...register("username")}
      type="text"
      placeholder="Username"
      className="border border-gray-300 focus:ring-2 focus:ring-lime-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
    />

    <input
      {...register("email")}
      type="email"
      placeholder="abc@gmail.com"
      className="border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
    />

    <input
      {...register("password")}
      type="password"
      placeholder="*****"
      className="border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none p-3 text-lg rounded-md shadow-sm transition-all duration-200"
    />

    <div className="flex flex-wrap gap-4 justify-end">
      <button
        type="submit"
        className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-200"
      >
        Update User
      </button>

      <button
        type="button"
        onClick={DeleteuserHandler}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-200"
      >
        Delete User
      </button>

      <button
        type="button"
        onClick={Logouthandle}
        className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-200"
      >
        Log Out
      </button>
    </div>
  </form>
</div>

  ):"Not Found"
}

export default Userprofile