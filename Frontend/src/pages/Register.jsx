import { nanoid } from '@reduxjs/toolkit';
import React, { use } from 'react'
import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../store/actions/UserAction';
import { useDispatch } from 'react-redux';
const Register = () => {

  const {register,handleSubmit,reset}  =  useForm()
const dispatch=useDispatch()
const navigate=useNavigate()



    const Loginuser=(user)=>{
        user.id=nanoid();
        user.isadmin=false 
        user.cart=[] 
        console.log(user);
        dispatch(asyncRegisterUser(user))
        navigate('/login')
        reset()
    }

  return (
    <div>

       <form
  onSubmit={handleSubmit(Loginuser)}
  className="flex flex-col w-full max-w-md mx-auto gap-6 mt-12 p-6 bg-white rounded-xl shadow-lg"
>
  {/* Username */}
  <input
    {...register("username")}
    type="text"
    placeholder="John-Downy"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />

  {/* Email */}
  <input
    {...register("email")}
    type="email"
    placeholder="john@wik.com"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />

  {/* Password */}
  <input
    {...register("password")}
    type="password"
    placeholder="******"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-6 py-2 rounded-lg transition-colors duration-200"
  >
    Register
  </button>

  {/* Link to Login */}
  <p className="text-sm text-gray-600">
    Already have an account?{" "}
    <NavLink
      to="/login"
      className="text-blue-500 hover:underline font-medium"
    >
      Login
    </NavLink>
  </p>
</form>

    </div>
  )
}

export default Register